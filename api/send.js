// Envío de cotizaciones desde el formulario del sitio, vía Resend.

const LIMITS = { nombre: 120, correo: 200, mensaje: 5000 };
const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/;

// Límite simple por IP: 5 envíos cada 10 minutos por instancia.
// No es perfecto en serverless (cada instancia tiene su memoria), pero frena ráfagas de spam.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function tooManyRequests(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

// Evita que el texto del formulario se interprete como HTML en el correo.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const body = req.body || {};

  // Campo trampa: invisible para personas, los bots suelen llenarlo.
  if (clean(body.empresa_web)) {
    return res.status(200).json({ ok: true });
  }

  const nombre = clean(body.nombre);
  const correo = clean(body.correo);
  const mensaje = clean(body.mensaje);

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  if (nombre.length > LIMITS.nombre || correo.length > LIMITS.correo || mensaje.length > LIMITS.mensaje) {
    return res.status(400).json({ error: 'Algún campo es demasiado largo' });
  }

  if (!EMAIL_RE.test(correo)) {
    return res.status(400).json({ error: 'El email no es válido' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconocida';
  if (tooManyRequests(ip)) {
    return res.status(429).json({ error: 'Demasiados envíos. Intenta en unos minutos.' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Falta RESEND_API_KEY');
    return res.status(500).json({ error: 'No se pudo enviar la consulta' });
  }

  const asunto = `Nueva cotización web - ${nombre.replace(/[\r\n]+/g, ' ').slice(0, 80)}`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'SURVEC Web <web@survec.cl>',
        to: ['contacto@survec.cl'],
        reply_to: correo,
        subject: asunto,
        text: `Nueva solicitud de cotización\n\nNombre: ${nombre}\nEmail: ${correo}\n\nProyecto:\n${mensaje}`,
        html: `
          <h2>Nueva solicitud de cotización</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Email:</strong> ${escapeHtml(correo)}</p>
          <p><strong>Proyecto:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(mensaje)}</p>
        `
      })
    });

    if (!response.ok) {
      // El detalle queda en los logs de Vercel; al navegador solo va un mensaje genérico.
      console.error('Resend respondió', response.status, await response.text());
      return res.status(502).json({ error: 'No se pudo enviar la consulta' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error al llamar a Resend', error);
    return res.status(502).json({ error: 'No se pudo enviar la consulta' });
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { nombre, correo, mensaje } = req.body || {};

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

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
      subject: `Nueva cotización web - ${nombre}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${correo}</p>
        <p><strong>Proyecto:</strong></p>
        <p>${mensaje}</p>
      `
    })
  });

  if (!response.ok) {
    const error = await response.text();
    return res.status(500).json({ error });
  }

  return res.status(200).json({ ok: true });
}

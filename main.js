'use strict';

const views = {
  home: {
    label: 'Inicio',
    title: 'Certeza territorial para decidir.',
    sidebarTitle: ['Certeza territorial', 'para decidir.'],
    sidebarText: 'No vendemos puntos; entregamos lectura tecnica del terreno para decidir con confianza.',
    cta: {
      label: 'Explorar servicios',
      view: 'servicios'
    },
    template: `
      <section class="view-page view-page--home">
        <div class="view-hero">
          <div class="view-copy view-animate">
            <span class="view-eyebrow mono">Vista 01 / Inicio</span>
            <h2 class="view-title" id="view-title">Certeza territorial para decidir.</h2>
          </div>

          <figure class="view-media view-animate" data-stagger="1">
            <img src="imagenes/00.png?v=tonalidad-20260429" alt="Vista aerea de un levantamiento topografico">
            <figcaption class="view-caption mono">CAPTURA AEREA / GNSS / ENTREGA 72H</figcaption>
          </figure>
        </div>

        <div class="info-grid">
          <article class="info-card view-animate" data-stagger="1">
            <span class="mono">Lectura territorial</span>
            <h3>Caminos, bordes y contexto</h3>
          </article>
          <article class="info-card view-animate" data-stagger="2">
            <span class="mono">Superficie digital</span>
            <h3>Nube, MDT y relieve</h3>
          </article>
          <article class="info-card view-animate" data-stagger="2">
            <span class="mono">Precision verificada</span>
            <h3>Control GNSS en terreno</h3>
          </article>
          <article class="info-card view-animate" data-stagger="3">
            <span class="mono">Compatibilidad</span>
            <h3>Listo para CAD y GIS</h3>
          </article>
        </div>
      </section>
    `
  },
  servicios: {
    label: 'Servicios',
    title: 'Mediciones listas para proyectar.',
    sidebarTitle: ['Datos tecnicos', 'listos para proyectar.'],
    sidebarText: 'Ortoimagen, MDT, curvas y volumetria para pasar del terreno a decisiones claras.',
    cta: {
      label: 'Método',
      view: 'metodo'
    },
    template: `
      <section class="view-page view-page--services">
        <div class="view-hero">
          <div class="view-copy view-animate">
            <span class="view-eyebrow mono">Vista 02 / Servicios</span>
            <h2 class="view-title" id="view-title">Mediciones listas para proyectar.</h2>
          </div>

          <figure class="view-media view-animate" data-stagger="1">
            <img src="imagenes/02.png?v=tonalidad-20260429" alt="Vista aerea de zona levantada con drone">
            <figcaption class="view-caption mono">ORTOIMAGEN / MDT / ENTREGA LISTA PARA PROYECTO</figcaption>
          </figure>
        </div>

        <div class="info-grid">
          <article class="info-card view-animate" data-stagger="1">
            <span class="mono">01 / Levantamiento</span>
            <h3>Topografia con drone</h3>
          </article>
          <article class="info-card view-animate" data-stagger="2">
            <span class="mono">02 / Volumetria</span>
            <h3>Corte y relleno</h3>
          </article>
          <article class="info-card view-animate" data-stagger="2">
            <span class="mono">03 / Modelos</span>
            <h3>Curvas, MDT y MDS</h3>
          </article>
          <article class="info-card view-animate" data-stagger="3">
            <span class="mono">04 / Vialidad</span>
            <h3>Perfiles y secciones</h3>
          </article>
        </div>
      </section>
    `
  },
  metodo: {
    label: 'Metodo',
    title: 'Trazabilidad de punta a punta.',
    sidebarTitle: ['Metodo trazable', 'de punta a punta.'],
    sidebarText: 'Planificamos, capturamos y validamos con control GNSS para entregar precision util.',
    cta: {
      label: 'Proyectos',
      view: 'proyectos'
    },
    template: `
      <section class="view-page view-page--method">
        <div class="view-hero">
          <div class="view-copy view-animate">
            <span class="view-eyebrow mono">Vista 03 / Metodo</span>
            <h2 class="view-title" id="view-title">Trazabilidad de punta a punta.</h2>
          </div>

          <figure class="view-media view-animate" data-stagger="1">
            <img src="imagenes/07.png?v=tonalidad-20260429" alt="Operacion y planeacion de mision topografica">
            <figcaption class="view-caption mono">MISION / PROCESO / TRAZABILIDAD</figcaption>
          </figure>
        </div>

        <div class="process-list">
          <article class="process-step view-animate" data-stagger="1">
            <span class="process-num mono">01</span>
            <div class="process-body">
              <h3>Vuelo planificado</h3>
            </div>
          </article>
          <article class="process-step view-animate" data-stagger="1">
            <span class="process-num mono">02</span>
            <div class="process-body">
              <h3>Control GNSS</h3>
            </div>
          </article>
          <article class="process-step view-animate" data-stagger="2">
            <span class="process-num mono">03</span>
            <div class="process-body">
              <h3>Validacion cruzada</h3>
            </div>
          </article>
          <article class="process-step view-animate" data-stagger="3">
            <span class="process-num mono">04</span>
            <div class="process-body">
              <h3>Entrega util</h3>
            </div>
          </article>
        </div>

        <article class="note-card view-animate" data-stagger="3">
          <span class="mini-label mono">Nota editorial</span>
          <h3>Trazabilidad de punta a punta</h3>
        </article>
      </section>
    `
  },
  proyectos: {
    label: 'Proyectos',
    title: 'Cada proyecto habla en su escala.',
    sidebarTitle: ['Proyectos medidos', 'a escala real.'],
    sidebarText: 'Obra, loteo, vialidad o predio: ajustamos entregables al uso real de tu equipo.',
    cta: {
      label: 'Solicitar Cotizacion',
      view: 'contacto'
    },
    template: `
      <section class="view-page view-page--projects">
        <div class="view-hero">
          <div class="view-copy view-animate">
            <span class="view-eyebrow mono">Vista 04 / Proyectos</span>
            <h2 class="view-title" id="view-title">Cada proyecto habla en su escala.</h2>
          </div>

          <figure class="view-media view-animate" data-stagger="1">
            <img src="imagenes/06.png?v=tonalidad-20260429" alt="Terreno industrial levantado con drone">
            <figcaption class="view-caption mono">CASOS REALES / ESCALA / PRECISION</figcaption>
          </figure>
        </div>

        <div class="project-grid">
          <article class="project-card view-animate" data-stagger="1">
            <span class="mono">Constructora</span>
            <h3>Control y cubicacion</h3>
            <ul class="project-meta">
              <li><span class="mono">Uso</span><strong>obra y movimiento</strong></li>
              <li><span class="mono">Salida</span><strong>orto + cubicacion</strong></li>
              <li><span class="mono">Valor</span><strong>decision rapida</strong></li>
            </ul>
          </article>
          <article class="project-card view-animate" data-stagger="2">
            <span class="mono">Arquitectura</span>
            <h3>Base precisa de sitio</h3>
            <ul class="project-meta">
              <li><span class="mono">Uso</span><strong>diseno de implantacion</strong></li>
              <li><span class="mono">Salida</span><strong>MDT + DXF</strong></li>
              <li><span class="mono">Valor</span><strong>lectura real del sitio</strong></li>
            </ul>
          </article>
          <article class="project-card view-animate" data-stagger="2">
            <span class="mono">Forestal / Agro</span>
            <h3>Predios y caminos</h3>
            <ul class="project-meta">
              <li><span class="mono">Uso</span><strong>gestion territorial</strong></li>
              <li><span class="mono">Salida</span><strong>orto + superficie</strong></li>
              <li><span class="mono">Valor</span><strong>seguimiento claro</strong></li>
            </ul>
          </article>
          <article class="project-card view-animate" data-stagger="3">
            <span class="mono">Mineria / Municipio</span>
            <h3>Catastro e infraestructura</h3>
            <ul class="project-meta">
              <li><span class="mono">Uso</span><strong>infraestructura</strong></li>
              <li><span class="mono">Salida</span><strong>DXF + informe</strong></li>
              <li><span class="mono">Valor</span><strong>trazabilidad formal</strong></li>
            </ul>
          </article>
        </div>
      </section>
    `
  },
  contacto: {
    label: 'Contacto',
    title: 'Cotiza precision para tu terreno.',
    sidebarTitle: ['Licita con precision', 'desde el terreno.'],
    sidebarText: 'Comparte ubicacion, area y entregables; respondemos con alcance, plazo y formato util.',
    cta: {
      label: 'Inicio',
      view: 'home'
    },
    template: `
      <section class="view-page view-page--contact">
        <div class="view-hero">
          <div class="view-copy view-animate">
            <span class="view-eyebrow mono">Vista 05 / Contacto</span>
            <h2 class="view-title" id="view-title">Cotiza precision para tu terreno.</h2>
          </div>

          <figure class="view-media view-animate" data-stagger="1">
            <img src="imagenes/04.png?v=tonalidad-20260429" alt="Terreno registrado para coordinacion de proyecto">
            <figcaption class="view-caption mono">RESPUESTA RAPIDA / COBERTURA CHILE</figcaption>
          </figure>
        </div>

        <div class="contact-layout">
          <section class="form-panel view-animate" data-stagger="1">
            <span class="mini-label mono">Formulario</span>
            <h3>Cuadremos el levantamiento</h3>
            <form id="contact-form" class="form-grid">
              <div class="field">
                <label for="nombre">Nombre</label>
                <input id="nombre" name="nombre" type="text" placeholder="Tu nombre">
              </div>
              <div class="field">
                <label for="correo">Email</label>
                <input id="correo" name="correo" type="email" placeholder="tu@correo.com">
              </div>
              <div class="field field-full">
                <label for="mensaje">Proyecto</label>
                <textarea id="mensaje" name="mensaje" placeholder="Area, ubicacion, plazo, precision esperada y entregables."></textarea>
              </div>
              <div class="field field-full">
                <button class="btn btn-black" type="submit">Enviar consulta</button>
              </div>
            </form>
            <p class="form-feedback" id="form-feedback" role="status" aria-live="polite"></p>
          </section>

          <aside class="contact-panel view-animate" data-stagger="2">
            <span class="mini-label mono">Referencia</span>
            <h3>Lo que podemos cotizar</h3>
            <ul class="contact-list">
              <li>
                <span class="mini-label mono">Entregables</span>
                <strong>LAS, LAZ, TIFF, DXF, MDT, MDS</strong>
              </li>
              <li>
                <span class="mini-label mono">Software</span>
                <strong>AutoCAD, Civil 3D, QGIS, Revit</strong>
              </li>
              <li>
                <span class="mini-label mono">Aplicacion</span>
                <strong>Obra, loteo, vialidad, catastro y faena</strong>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    `
  }
};

/* ===== ANIMACION 20 — FONDOS ANIMADOS GIRO ===== */
(function initRotatingBackground() {
  const canvas = document.getElementById('heroCanvas');
  const stage = document.querySelector('.single-home');
  if (!canvas || !stage) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  const pointer = { x: -9999, y: -9999 };
  const particles = [];
  let time = 0;
  let lastTs = 0;
  const MOUSE_REACTIVITY = 0.25;

  const cfg = {
    particle: {
      count:      () => (window.innerWidth < 680 ? 70 : 150),
      speed:      0.72,
      maxSpeed:   2.4 * MOUSE_REACTIVITY,
      connectDist:210,
      attractStr: 0.024 * MOUSE_REACTIVITY,
      attractR:   240,
    },
    /* Sistema de anillos principal — centrado en el panel derecho */
    ringsA: {
      cx: () => canvas.width  * 0.63,
      cy: () => canvas.height * 0.50,
      list: [
        { r: 0.19, spd:  0.00095, lw: 1.9, op: 0.26, segs:  8, gapR: 0.34 },
        { r: 0.29, spd: -0.00068, lw: 1.5, op: 0.18, segs: 12, gapR: 0.30 },
        { r: 0.41, spd:  0.00048, lw: 1.1, op: 0.12, segs: 16, gapR: 0.27 },
        { r: 0.55, spd: -0.00032, lw: 0.8, op: 0.07, segs: 20, gapR: 0.24 },
        { r: 0.71, spd:  0.00020, lw: 0.5, op: 0.04, segs: 24, gapR: 0.21 },
      ]
    },
    /* Sistema de anillos secundario — centrado en canvas para llenar fondo */
    ringsB: {
      cx: () => canvas.width  * 0.50,
      cy: () => canvas.height * 0.50,
      list: [
        { r: 0.46, spd:  0.00025, lw: 0.7, op: 0.05, segs:  6, gapR: 0.52 },
        { r: 0.70, spd: -0.00015, lw: 0.4, op: 0.03, segs:  8, gapR: 0.46 },
      ]
    },
    spokes: {
      cx:     () => canvas.width  * 0.63,
      cy:     () => canvas.height * 0.50,
      count:  18,
      spd:    0.00042,
      maxLen: 0.42,
      op:     0.09,
    },
    orbs: [
      { px: 0.63, py: 0.50, rx: 0.32, op: 0.15, spd:  0.00075, dx: 0.028, dy: 0.028 },
      { px: 0.20, py: 0.34, rx: 0.22, op: 0.08, spd: -0.00052, dx: 0.038, dy: 0.038 },
      { px: 0.83, py: 0.66, rx: 0.19, op: 0.07, spd:  0.00038, dx: 0.030, dy: 0.030 },
    ],
    pulse: {
      cx:    () => canvas.width  * 0.63,
      cy:    () => canvas.height * 0.50,
      baseR: 0.055,
      spd:   0.0019,
    }
  };

  class Particle {
    constructor() { this.reset(); }

    reset() {
      this.x      = Math.random() * canvas.width;
      this.y      = Math.random() * canvas.height;
      this.vx     = (Math.random() - 0.5) * cfg.particle.speed;
      this.vy     = (Math.random() - 0.5) * cfg.particle.speed;
      this.radius = Math.random() * 2.1 + 0.6;
      this.alpha  = Math.random() * 0.58 + 0.18;
      this.glow   = Math.random() > 0.80;
    }

    update() {
      const dx   = pointer.x - this.x;
      const dy   = pointer.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0 && dist < cfg.particle.attractR) {
        this.vx += (dx / dist) * cfg.particle.attractStr;
        this.vy += (dy / dist) * cfg.particle.attractStr;
      }
      const sp = Math.hypot(this.vx, this.vy);
      if (sp > cfg.particle.maxSpeed) {
        this.vx = (this.vx / sp) * cfg.particle.maxSpeed;
        this.vy = (this.vy / sp) * cfg.particle.maxSpeed;
      }
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height)  this.vy *= -1;
    }

    draw() {
      if (this.glow) {
        const gr = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 5.5);
        gr.addColorStop(0, `rgba(253,184,19,${this.alpha * 0.75})`);
        gr.addColorStop(1, 'rgba(253,184,19,0)');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 5.5, 0, Math.PI * 2);
        ctx.fillStyle = gr;
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(253,184,19,${this.alpha})`;
      ctx.fill();
    }
  }

  function drawRings(sys, base) {
    const cx = sys.cx();
    const cy = sys.cy();
    sys.list.forEach((ring) => {
      const radius = base * ring.r;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * ring.spd);
      ctx.strokeStyle = `rgba(253,184,19,${ring.op})`;
      ctx.lineWidth   = ring.lw;
      const segAngle  = (Math.PI * 2 / ring.segs) * (1 - ring.gapR);
      for (let s = 0; s < ring.segs; s++) {
        const a0 = (s / ring.segs) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(0, 0, radius, a0, a0 + segAngle);
        ctx.stroke();
      }
      ctx.restore();
    });
  }

  function drawSpokes() {
    const cx     = cfg.spokes.cx();
    const cy     = cfg.spokes.cy();
    const maxLen = Math.min(canvas.width, canvas.height) * cfg.spokes.maxLen;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(time * cfg.spokes.spd);
    for (let i = 0; i < cfg.spokes.count; i++) {
      const angle = (i / cfg.spokes.count) * Math.PI * 2;
      const x2    = Math.cos(angle) * maxLen;
      const y2    = Math.sin(angle) * maxLen;
      const gr    = ctx.createLinearGradient(0, 0, x2, y2);
      gr.addColorStop(0.1, `rgba(253,184,19,${cfg.spokes.op})`);
      gr.addColorStop(1,   'rgba(253,184,19,0)');
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = gr;
      ctx.lineWidth   = 0.7;
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawOrbs() {
    cfg.orbs.forEach((orb, i) => {
      const x  = canvas.width  * orb.px + Math.sin(time * orb.spd + i * 2.1) * canvas.width  * orb.dx;
      const y  = canvas.height * orb.py + Math.cos(time * orb.spd + i * 1.7) * canvas.height * orb.dy;
      const r  = Math.min(canvas.width, canvas.height) * orb.rx;
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0,    `rgba(253,184,19,${orb.op})`);
      gr.addColorStop(0.45, `rgba(253,184,19,${orb.op * 0.38})`);
      gr.addColorStop(1,    'rgba(253,184,19,0)');
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = gr;
      ctx.fill();
    });
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < cfg.particle.connectDist) {
          const a = (1 - dist / cfg.particle.connectDist) * 0.30;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(253,184,19,${a})`;
          ctx.lineWidth   = 0.85;
          ctx.stroke();
        }
      }
    }
  }

  function drawPulse() {
    const cx   = cfg.pulse.cx();
    const cy   = cfg.pulse.cy();
    const base = Math.min(canvas.width, canvas.height) * cfg.pulse.baseR;
    const p    = Math.sin(time * cfg.pulse.spd) * 0.5 + 0.5;
    const r    = base * (1 + p * 0.65);
    const gr   = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    gr.addColorStop(0,    `rgba(253,184,19,${0.42 + p * 0.20})`);
    gr.addColorStop(0.28, `rgba(253,184,19,${0.16 + p * 0.08})`);
    gr.addColorStop(1,    'rgba(253,184,19,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = gr;
    ctx.fill();
  }

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = stage.offsetHeight;
  }

  function seed() {
    particles.length = 0;
    const n = cfg.particle.count();
    for (let i = 0; i < n; i++) particles.push(new Particle());
  }

  function frame(ts) {
    const delta = lastTs ? ts - lastTs : 16;
    lastTs = ts;
    time  += delta;
    const base = Math.min(canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawOrbs();
    drawRings(cfg.ringsA, base);
    drawRings(cfg.ringsB, base);
    drawSpokes();
    particles.forEach((p) => { p.update(); p.draw(); });
    drawConnections();
    drawPulse();
    window.requestAnimationFrame(frame);
  }

  window.addEventListener('resize', () => { resize(); seed(); });
  document.addEventListener('pointermove', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; });
  document.addEventListener('pointerleave', () => { pointer.x = -9999; pointer.y = -9999; });

  resize();
  seed();
  window.requestAnimationFrame(frame);
})();

(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((element) => observer.observe(element));
})();

(function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const syncHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
})();

(function initSingleHome() {
  const body = document.body;
  const viewCard = document.getElementById('view-card');
  const overlay = document.getElementById('page-transition');
  const nav = document.querySelector('.header-nav');
  const navToggle = document.querySelector('.nav-toggle');
  if (!body || !viewCard || !overlay) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let currentView = views[normalizeView(window.location.hash.slice(1))] ? normalizeView(window.location.hash.slice(1)) : 'home';
  let isTransitioning = false;

  function normalizeView(view) {
    return views[view] ? view : 'home';
  }

  function closeMobileMenu() {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function markActiveControls(view) {
    document.querySelectorAll('[data-view-trigger]').forEach((control) => {
      const isActive = control.dataset.view === view;
      control.classList.toggle('is-active', isActive);

      if (control.classList.contains('nav-link') || control.closest('.footer-nav')) {
        control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      }
    });
  }

  function updateSidebarCopy(view) {
    const title = document.getElementById('stage-title');
    const note = document.getElementById('stage-view-note');
    const content = views[view];
    if (!content) return;

    if (title && content.sidebarTitle) {
      title.replaceChildren();
      content.sidebarTitle.forEach((line, index) => {
        if (index > 0) title.appendChild(document.createElement('br'));
        title.appendChild(document.createTextNode(line));
      });
    }

    if (note) {
      note.textContent = content.sidebarText || '';
    }
  }

  function updateSidebarCta(view) {
    const ctaButton = document.querySelector('.stage-actions [data-view-trigger]');
    const content = views[view];
    if (!ctaButton || !content || !content.cta) return;

    ctaButton.textContent = content.cta.label;
    ctaButton.dataset.view = content.cta.view;
  }

  function bindDynamicContent() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (form && feedback) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        feedback.textContent = 'Consulta recibida.';
      });
    }
  }

  function hydrateView() {
    bindDynamicContent();
    window.requestAnimationFrame(() => {
      viewCard.classList.add('is-ready');
    });
  }

  function renderView(view, options = {}) {
    const nextView = normalizeView(view);
    const content = views[nextView];
    if (!content) return;

    currentView = nextView;
    body.dataset.view = nextView;
    updateSidebarCopy(nextView);
    updateSidebarCta(nextView);
    viewCard.classList.remove('is-ready');
    viewCard.innerHTML = content.template;
    markActiveControls(nextView);
    bindTriggers();
    hydrateView();

    if (!options.skipHash) {
      window.history.replaceState(null, '', `#${nextView}`);
    }

    if (!options.skipFocus) {
      const title = document.getElementById('view-title');
      if (title) {
        title.setAttribute('tabindex', '-1');
        title.focus({ preventScroll: true });
      }
    }
  }

  function playTransition(update) {
    if (prefersReducedMotion.matches) {
      update();
      return;
    }

    overlay.classList.remove('is-entering', 'is-leaving');
    void overlay.offsetWidth;
    overlay.classList.add('is-entering');

    window.setTimeout(() => {
      const commitUpdate = () => {
        update();
        overlay.classList.remove('is-entering');
        void overlay.offsetWidth;
        overlay.classList.add('is-leaving');

        window.setTimeout(() => {
          overlay.classList.remove('is-leaving');
          isTransitioning = false;
        }, 760);
      };

      if (document.startViewTransition) {
        document.startViewTransition(commitUpdate);
      } else {
        commitUpdate();
      }
    }, 320);
  }

  function changeView(view) {
    const nextView = normalizeView(view);
    if (nextView === currentView || isTransitioning) {
      closeMobileMenu();
      return;
    }

    closeMobileMenu();
    isTransitioning = true;
    playTransition(() => renderView(nextView));
  }

  function bindTriggers(root = document) {
    root.querySelectorAll('[data-view-trigger]').forEach((control) => {
      if (control.dataset.bound === 'true') return;

      control.dataset.bound = 'true';
      control.addEventListener('click', (event) => {
        event.preventDefault();
        const nextView = control.dataset.view;
        if (nextView) {
          changeView(nextView);
        }
      });
    });
  }

  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  window.addEventListener('hashchange', () => {
    const hashedView = normalizeView(window.location.hash.slice(1));
    if (hashedView !== currentView && !isTransitioning) {
      renderView(hashedView, { skipHash: true });
    }
  });

  bindTriggers(document);
  renderView(currentView, { skipHash: true, skipFocus: true });
})();

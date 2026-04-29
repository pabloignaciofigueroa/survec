/* ============================================================
   SURVEC — Intro animada con GSAP
   intro.js — v2: tiempos respirados, ~6s total
   ============================================================ */

(function initSurvecIntro() {
  'use strict';

  const overlay     = document.getElementById('intro-overlay');
  const siteContent = document.getElementById('site-content');
  const skipBtn     = document.getElementById('intro-skip');

  const topPiece    = document.querySelector('.intro-logo__piece--top');
  const centerPiece = document.querySelector('.intro-logo__piece--center');
  const wordmark    = document.querySelector('.intro-logo__piece--wordmark');
  const descriptor  = document.querySelector('.intro-logo__descriptor');

  /* Guardia */
  if (!overlay || !siteContent || typeof gsap === 'undefined') {
    if (siteContent) siteContent.classList.add('is-visible');
    if (overlay)     overlay.classList.add('is-exiting');
    return;
  }

  /* ——— Preferencias y sesión ——— */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const devMode        = window.location.href.indexOf('dev') !== -1;
  const navigationEntry = performance.getEntriesByType('navigation')[0];
  const isReload        = navigationEntry
    ? navigationEntry.type === 'reload'
    : performance.navigation && performance.navigation.type === 1;
  const alreadySeen     = !devMode && !isReload && sessionStorage.getItem('survecIntroSeen') === 'true';

  /* ——— Revelar sitio ——— */
  function revealSite() {
    overlay.classList.add('is-exiting');
    siteContent.classList.add('is-visible');
    document.body.classList.remove('is-intro-active');
    if (!devMode) sessionStorage.setItem('survecIntroSeen', 'true');
    window.setTimeout(function () {
      overlay.setAttribute('hidden', '');
      overlay.style.display = 'none';
    }, 1100);
  }

  /* ——— Acceso rápido ——— */
  if (prefersReduced || alreadySeen) {
    revealSite();
    return;
  }

  /* ——— Bloquear scroll ——— */
  document.body.classList.add('is-intro-active');

  /* ——— Estado inicial ——— */
  gsap.set(siteContent, { opacity: 0, y: 18 });
  gsap.set(topPiece,    { opacity: 0, y: -60, filter: 'blur(6px)' });
  gsap.set(centerPiece, { opacity: 0, scale: 0.978, filter: 'blur(6px)' });
  gsap.set(wordmark,    { opacity: 0, y: 60, filter: 'blur(6px)' });
  gsap.set(descriptor,  { opacity: 0 });

  /* ——— Timeline principal (~6s) ——— */
  var tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: revealSite,
  });

  /* Fase 0 — respiración inicial */
  tl.to({}, { duration: 0.50 });

  /* Fase 1 — entrada de piezas (desfase pequeño, no lista escolar) */
  tl.to(topPiece, {
    opacity: 1, y: 0, filter: 'blur(0px)',
    duration: 1.10,
  }, 0.50);

  tl.to(centerPiece, {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    duration: 1.00,
  }, 0.66);

  tl.to(wordmark, {
    opacity: 1, y: 0, filter: 'blur(0px)',
    duration: 1.10,
  }, 0.76);

  /* Destellos por pieza */
  tl.add(function () { triggerGlint(topPiece,    'gold');  }, 1.10);
  tl.add(function () { triggerGlint(centerPiece, 'gold');  }, 1.26);
  tl.add(function () { triggerGlint(wordmark,    'white'); }, 1.40);

  /* Fase 2 — logo armado, el cliente lo lee */
  tl.to({}, { duration: 1.60 });

  /* Fase 3 — descriptor */
  tl.to(descriptor, {
    opacity: 1,
    duration: 0.85,
    ease: 'power2.out',
  });
  tl.add(function () { triggerDescriptorGlow(); }, '>-0.20');

  /* Fase 4 — sostén final */
  tl.to({}, { duration: 1.50 });

  /* Fase 5 — fade out overlay + entrada sitio solapados */
  tl.to(overlay, {
    opacity: 0,
    duration: 1.00,
    ease: 'power2.inOut',
  }, '>');

  tl.to(siteContent, {
    opacity: 1, y: 0,
    duration: 1.00,
    ease: 'power2.out',
  }, '<0.15');

  /* ——— Botón saltar ——— */
  if (skipBtn) {
    skipBtn.addEventListener('click', function () {
      tl.kill();
      gsap.to(overlay, {
        opacity: 0, duration: 0.45, ease: 'power2.inOut',
        onComplete: revealSite,
      });
      gsap.to(siteContent, {
        opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', delay: 0.20,
      });
    });
  }

  /* ——— Destello por pieza ——— */
  function triggerGlint(element, tone) {
    if (!element) return;
    var rect  = element.getBoundingClientRect();
    var glint = document.createElement('span');
    glint.className = 'intro-glint';
    var color = tone === 'white'
      ? 'radial-gradient(circle, rgba(255,255,255,0.80), rgba(255,255,255,0) 66%)'
      : 'radial-gradient(circle, rgba(253,190,40,0.85), rgba(253,190,40,0) 66%)';
    glint.style.background = color;
    glint.style.left = (rect.left + rect.width  / 2) + 'px';
    glint.style.top  = (rect.top  + rect.height / 2) + 'px';
    document.body.appendChild(glint);
    gsap.fromTo(glint,
      { opacity: 0, scale: 0.50 },
      {
        opacity: 1, scale: 1.20, duration: 0.20, ease: 'power2.out',
        yoyo: true, repeat: 1,
        onComplete: function () { glint.remove(); },
      }
    );
  }

  /* ——— Glow descriptor ——— */
  function triggerDescriptorGlow() {
    var img = descriptor ? descriptor.querySelector('img') : null;
    if (!img) return;
    gsap.fromTo(img,
      { filter: 'brightness(0) invert(1) drop-shadow(0 0 0px rgba(253,184,19,0))' },
      {
        filter: 'brightness(0) invert(1) drop-shadow(0 0 12px rgba(253,184,19,0.55))',
        duration: 0.35, yoyo: true, repeat: 1, ease: 'power2.out',
      }
    );
  }

})();

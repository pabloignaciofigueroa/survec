/* ============================================================
   SURVEC — Intro animada con GSAP
   intro.js — v3: espera el logo descargado, ~3,5 s total
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

  /* Avisa al resto del sitio (fondo animado, precarga de fotos) que la intro termino. */
  function announceDone() {
    if (window.__survecIntroDone) return;
    window.__survecIntroDone = true;
    document.dispatchEvent(new CustomEvent('survec:intro-done'));
  }

  /* Guardia */
  if (!overlay || !siteContent || typeof gsap === 'undefined') {
    if (siteContent) siteContent.classList.add('is-visible');
    if (overlay)     overlay.classList.add('is-exiting');
    announceDone();
    return;
  }

  /* ——— Preferencias y sesión ——— */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const devMode        = window.location.href.indexOf('dev') !== -1;
  const navigationEntry = performance.getEntriesByType('navigation')[0];
  const isReload        = navigationEntry
    ? navigationEntry.type === 'reload'
    : performance.navigation && performance.navigation.type === 1;
  let alreadySeen = false;
  try {
    alreadySeen = !devMode && !isReload && sessionStorage.getItem('survecIntroSeen') === 'true';
  } catch (e) { /* modo privado o storage bloqueado */ }

  /* ——— Revelar sitio ——— */
  function revealSite() {
    overlay.classList.add('is-exiting');
    siteContent.classList.add('is-visible');
    document.body.classList.remove('is-intro-active');
    if (!devMode) {
      try { sessionStorage.setItem('survecIntroSeen', 'true'); } catch (e) { /* modo privado */ }
    }
    announceDone();
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

  /* ——— Timeline principal (~3,5 s) ———
     Se crea en pausa y solo arranca cuando las piezas del logo ya estan
     descargadas, para que nunca se anime un logo vacio en conexiones lentas. */
  var tl = gsap.timeline({
    paused: true,
    defaults: { ease: 'power3.out' },
    onComplete: revealSite,
  });

  /* Fase 0 — respiracion inicial */
  tl.to({}, { duration: 0.20 });

  /* Fase 1 — entrada de piezas */
  tl.to(topPiece, {
    opacity: 1, y: 0, filter: 'blur(0px)',
    duration: 0.90,
  }, 0.20);

  tl.to(centerPiece, {
    opacity: 1, scale: 1, filter: 'blur(0px)',
    duration: 0.85,
  }, 0.32);

  tl.to(wordmark, {
    opacity: 1, y: 0, filter: 'blur(0px)',
    duration: 0.90,
  }, 0.42);

  /* Destellos por pieza */
  tl.add(function () { triggerGlint(topPiece,    'gold');  }, 0.70);
  tl.add(function () { triggerGlint(centerPiece, 'gold');  }, 0.82);
  tl.add(function () { triggerGlint(wordmark,    'white'); }, 0.94);

  /* Fase 2 — logo armado, el cliente lo lee */
  tl.to({}, { duration: 0.60 });

  /* Fase 3 — descriptor */
  tl.to(descriptor, {
    opacity: 1,
    duration: 0.50,
    ease: 'power2.out',
  });
  tl.add(function () { triggerDescriptorGlow(); }, '>-0.15');

  /* Fase 4 — sosten final */
  tl.to({}, { duration: 0.50 });

  /* Fase 5 — fade out overlay + entrada sitio solapados */
  tl.to(overlay, {
    opacity: 0,
    duration: 0.65,
    ease: 'power2.inOut',
  }, '>');

  tl.to(siteContent, {
    opacity: 1, y: 0,
    duration: 0.70,
    ease: 'power2.out',
  }, '<0.10');

  /* ——— Esperar el logo ———
     Arranca cuando las 4 piezas estan listas. Si alguna tarda mas de 4 s
     (red muy mala), arranca igual para no dejar al visitante esperando. */
  var started = false;
  var skipped = false;
  function startIntro() {
    if (started || skipped) return;
    started = true;
    tl.play();
  }

  function whenLoaded(img) {
    if (!img) return Promise.resolve();
    var ready = img.complete && img.naturalWidth > 0
      ? Promise.resolve()
      : new Promise(function (resolve) {
          img.addEventListener('load', resolve, { once: true });
          img.addEventListener('error', resolve, { once: true });
        });
    return ready.then(function () {
      return img.decode ? img.decode().catch(function () {}) : undefined;
    });
  }

  var descriptorImg = descriptor ? descriptor.querySelector('img') : null;
  Promise.all([topPiece, centerPiece, wordmark, descriptorImg].map(whenLoaded)).then(startIntro);
  window.setTimeout(startIntro, 4000);

  /* ——— Boton saltar ——— */
  if (skipBtn) {
    skipBtn.addEventListener('click', function () {
      skipped = true;
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

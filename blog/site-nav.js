/* Shared hamburger-drawer behaviour for sub-page navbars. */
(function () {
  'use strict';
  function init() {
    var btn   = document.querySelector('.site-nav-hamburger');
    var draw  = document.getElementById('site-nav-drawer');
    if (!btn || !draw) return;
    var close = draw.querySelector('.site-nav-drawer-close');
    var links = draw.querySelectorAll('.site-nav-drawer-links a');

    function open() {
      draw.classList.add('is-open');
      draw.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('site-drawer-open');
    }
    function shut() {
      draw.classList.remove('is-open');
      draw.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('site-drawer-open');
    }
    btn.addEventListener('click', function () {
      if (draw.classList.contains('is-open')) shut(); else open();
    });
    close && close.addEventListener('click', shut);
    draw.addEventListener('click', function (e) { if (e.target === draw) shut(); });
    Array.prototype.forEach.call(links, function (a) { a.addEventListener('click', shut); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && draw.classList.contains('is-open')) shut();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

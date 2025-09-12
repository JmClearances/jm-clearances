// menu.js
(function () {
  const nav = document.getElementById('site-nav');
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('primary-menu');

  if (!nav || !btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

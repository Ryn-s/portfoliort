/* Portfolio — interactions. Aucune dépendance. */

/* ---------------------------------------------- Menu mobile (accessible) */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.setAttribute('aria-expanded', 'false');

  const setMenu = (open) => {
    navLinks.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  navToggle.addEventListener('click', () =>
    setMenu(!navLinks.classList.contains('open')));

  navLinks.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      setMenu(false);
      navToggle.focus();
    }
  });
}

/* ------------------------------------------------ Apparition au défilement */
const reveals = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('in'));
} else if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------ Onglets CV */
const cvTabs = document.querySelectorAll('.cv-tab');
const cvPanels = document.querySelectorAll('.cv-panel');

cvTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    cvTabs.forEach((t) => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    cvPanels.forEach((p) => p.classList.remove('active'));

    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const panel = document.getElementById(tab.dataset.target);
    if (panel) panel.classList.add('active');
  });
});

/* --------------------------------- Section courante repérée dans le menu */
const sections = document.querySelectorAll('section[id]');
const menuLinks = document.querySelectorAll('.nav-links a[href^="#"]');

if (sections.length && menuLinks.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      menuLinks.forEach((l) =>
        l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((s) => spy.observe(s));
}

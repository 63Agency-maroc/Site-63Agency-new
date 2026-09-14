export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = document.querySelectorAll('[data-animate]');

  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = el.getAttribute('data-delay');
    if (delay) el.style.setProperty('--delay', delay);
  });

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));
}

export function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  const toggle = () => {
    btn.hidden = window.scrollY < 400;
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = [...document.querySelectorAll('[data-animate]')];

  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = el.getAttribute('data-delay');
    if (delay) el.style.setProperty('--delay', delay);
  });

  const reveal = (el) => {
    if (el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
  };

  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    elements.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.01,
      rootMargin: '0px 0px -5% 0px'
    }
  );

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    return rect.bottom > 0 && rect.right > 0 && rect.top < vh && rect.left < vw;
  };

  const revealVisibleFallback = () => {
    elements.forEach((el) => {
      if (el.classList.contains('is-visible')) return;
      if (!isInViewport(el)) return;
      reveal(el);
      observer.unobserve(el);
    });
  };

  elements.forEach((el) => observer.observe(el));

  window.addEventListener('load', revealVisibleFallback);
  window.addEventListener('scroll', revealVisibleFallback, { passive: true });
  revealVisibleFallback();
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

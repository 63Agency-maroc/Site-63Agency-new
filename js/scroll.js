export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = [...document.querySelectorAll('[data-animate]')];

  if (!elements.length) return;

  elements.forEach((el) => {
    const delay = el.getAttribute('data-delay');
    if (delay) el.style.setProperty('--delay', delay);
  });

  const reveal = (el) => {
    if (!el || el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
  };

  const revealAll = () => elements.forEach(reveal);

  if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
    revealAll();
    return;
  }

  // Tall cards (ads images) can never reach a high intersection ratio —
  // threshold 0 + positive rootMargin so any pixel near the viewport reveals.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: [0, 0.01, 0.05],
      rootMargin: '120px 0px 120px 0px'
    }
  );

  const isNearViewport = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const vw = window.innerWidth || document.documentElement.clientWidth;
    const pad = 160;
    return (
      rect.bottom > -pad &&
      rect.right > 0 &&
      rect.top < vh + pad &&
      rect.left < vw
    );
  };

  const revealNear = () => {
    elements.forEach((el) => {
      if (el.classList.contains('is-visible')) return;
      if (!isNearViewport(el)) return;
      reveal(el);
      observer.unobserve(el);
    });
  };

  // #ads: force-reveal entire section when it approaches viewport
  const adsSection = document.getElementById('ads');
  if (adsSection) {
    const adsObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;
        adsSection.querySelectorAll('[data-animate]').forEach((el) => {
          reveal(el);
          observer.unobserve(el);
        });
        adsObserver.disconnect();
      },
      { threshold: 0, rootMargin: '200px 0px 200px 0px' }
    );
    adsObserver.observe(adsSection);
  }

  elements.forEach((el) => observer.observe(el));

  window.addEventListener('load', revealNear);
  window.addEventListener('scroll', revealNear, { passive: true });
  window.addEventListener('resize', revealNear, { passive: true });
  revealNear();

  // Last-resort failsafe: never leave content stuck at opacity 0
  window.setTimeout(revealAll, 2500);
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

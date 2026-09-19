/**
 * Simple fade-up reveals for About story cards.
 */
export function initAboutScroll() {
  const section = document.getElementById('about-scroll');
  if (!section) return;

  const items = [...section.querySelectorAll('[data-about-reveal]')];
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const reveal = (el, index = 0) => {
    if (!el || el.classList.contains('is-visible')) return;
    el.style.setProperty('--about-delay', `${Math.min(index * 60, 240)}ms`);
    el.classList.add('is-visible');
  };

  if (prefersReduced) {
    items.forEach((el) => reveal(el, 0));
    return;
  }

  if (typeof IntersectionObserver === 'undefined') {
    items.forEach((el, i) => reveal(el, i));
    return;
  }

  let revealIndex = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;
        reveal(entry.target, revealIndex++);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: [0, 0.12],
      rootMargin: '0px 0px -8% 0px'
    }
  );

  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
      reveal(el, revealIndex++);
    } else {
      observer.observe(el);
    }
  });
}

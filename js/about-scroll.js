/**
 * Scroll-driven SVG stroke + left/right rail reveals.
 */
export function initAboutScroll() {
  const section = document.getElementById('about-scroll');
  const path = document.getElementById('about-stroke-path');
  if (!section || !path) return;

  const rails = [...section.querySelectorAll('[data-about-reveal]')];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  path.setAttribute('pathLength', '1');
  path.style.strokeDasharray = '1';

  const setProgress = (progress) => {
    const clamped = Math.min(1, Math.max(0, progress));
    const pathLength = 0.5 + clamped * 0.5;
    path.style.strokeDashoffset = String(1 - pathLength);
    section.style.setProperty('--about-progress', String(clamped));

    rails.forEach((el) => {
      const threshold = Number(el.getAttribute('data-about-reveal')) || 0;
      const visible = clamped >= threshold - 0.04;
      el.classList.toggle('is-visible', visible);
    });
  };

  if (prefersReduced) {
    setProgress(1);
    return;
  }

  setProgress(0);

  let ticking = false;

  const update = () => {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const range = Math.max(1, section.offsetHeight - window.innerHeight);
    const scrolled = -rect.top;
    setProgress(scrolled / range);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

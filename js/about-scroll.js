/**
 * Scroll-driven SVG stroke + left/right rail reveals.
 * Rails reveal when they enter the viewport (not after you've scrolled past).
 */
export function initAboutScroll() {
  const section = document.getElementById('about-scroll');
  const path = document.getElementById('about-stroke-path');
  if (!section || !path) return;

  const rails = [...section.querySelectorAll('[data-about-reveal]')];
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  path.setAttribute('pathLength', '1');
  path.style.strokeDasharray = '1';

  const setStrokeProgress = (progress) => {
    const clamped = Math.min(1, Math.max(0, progress));
    const pathLength = 0.5 + clamped * 0.5;
    path.style.strokeDashoffset = String(1 - pathLength);
    section.style.setProperty('--about-progress', String(clamped));
  };

  const revealRail = (el) => {
    if (!el || el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
  };

  if (prefersReduced) {
    setStrokeProgress(1);
    rails.forEach(revealRail);
    return;
  }

  setStrokeProgress(0);

  // Reveal each card when it approaches the viewport — early enough to read
  if (typeof IntersectionObserver !== 'undefined' && rails.length) {
    const railObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.intersectionRatio <= 0) return;
          revealRail(entry.target);
          railObserver.unobserve(entry.target);
        });
      },
      {
        threshold: [0, 0.01, 0.08],
        // Expand bottom so cards appear as they approach — not after you passed them
        rootMargin: '12% 0px 28% 0px'
      }
    );

    rails.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already on screen at load
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        revealRail(el);
      } else {
        railObserver.observe(el);
      }
    });
  } else {
    rails.forEach(revealRail);
  }

  let ticking = false;

  const updateStroke = () => {
    ticking = false;
    const rect = section.getBoundingClientRect();
    const range = Math.max(1, section.offsetHeight - window.innerHeight);
    const scrolled = -rect.top;
    setStrokeProgress(scrolled / range);
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateStroke);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateStroke();
}

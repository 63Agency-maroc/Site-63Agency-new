import gsap from 'https://esm.sh/gsap@3.12.5';
import { ScrollTrigger } from 'https://esm.sh/gsap@3.12.5/ScrollTrigger';

export function initStickyCards() {
  const section = document.querySelector('.sticky-cards');
  if (!section) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = [...section.querySelectorAll('.sticky-card')];
  if (cards.length < 2) return;

  if (prefersReducedMotion) {
    cards.forEach((card, i) => {
      card.style.transform = 'none';
      card.style.position = 'relative';
      card.style.marginBottom = i === cards.length - 1 ? '0' : '1rem';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(cards[0], { y: '0%', scale: 1, rotation: 0 });
  for (let i = 1; i < cards.length; i++) {
    gsap.set(cards[i], { y: '100%', scale: 1, rotation: 0 });
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${window.innerHeight * (cards.length - 1)}`,
      pin: true,
      scrub: 0.5,
      pinSpacing: true,
      anticipatePin: 1
    }
  });

  for (let i = 0; i < cards.length - 1; i++) {
    timeline.to(
      cards[i],
      {
        scale: 0.7,
        rotation: 5,
        duration: 1,
        ease: 'none'
      },
      i
    );

    timeline.to(
      cards[i + 1],
      {
        y: '0%',
        duration: 1,
        ease: 'none'
      },
      i
    );
  }

  const onResize = () => ScrollTrigger.refresh();
  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('resize', onResize);
    timeline.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}

// Content is visible by default. Animation is an enhancement, never a reveal gate.
(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const activeAnimations = new WeakMap();

  function enterObjects(root, selector, { duration = 680, stagger = 65 } = {}) {
    if (!root || reducedMotion.matches) return;
    const elements = [...root.querySelectorAll(selector)].filter(element => element.getClientRects().length);
    elements.forEach((element, index) => {
      if (typeof element.animate !== 'function') return;
      activeAnimations.get(element)?.cancel();
      const artwork = element.matches('.hero-art, .dept-demo, .honor-award, .map-card');
      const animation = element.animate([
        { opacity: 0, transform: artwork ? 'translate3d(26px, 14px, 0) scale(.97)' : 'translate3d(0, 22px, 0)' },
        { opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
      ], {
        duration,
        delay: Math.min(index * stagger, 430),
        easing: 'cubic-bezier(.2,.75,.25,1)',
        fill: 'backwards'
      });
      activeAnimations.set(element, animation);
      animation.finished.then(() => {
        if (activeAnimations.get(element) === animation) activeAnimations.delete(element);
      }).catch(() => { });
    });
  }

  const pageObjects = [
    '.hero-copy > .eyebrow', '#hero-title', '.hero-description', '.hero-actions',
    '.role-launcher > p', '.role-launcher button', '.hero-art', '.idea-ribbon',
    '.section-top', '.about-heading > *', '.idea-formula > span', '.idea-formula > strong',
    '.journey-item', '.dept-tabs button', '.screen-switch', '.dept-copy > *', '.dept-demo',
    '.honor-copy > *', '.honor-award', '.honor-facts > div', '.future-heading > *', '.future-paths > div',
    '.future-contact > *'
  ].join(',');

  if ('IntersectionObserver' in window) {
    const enteredPages = new WeakSet();
    const pageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= .3) {
          if (!enteredPages.has(entry.target)) enterObjects(entry.target, pageObjects);
          enteredPages.add(entry.target);
        } else if (entry.intersectionRatio < .1) {
          enteredPages.delete(entry.target);
        }
      });
    }, { threshold: [0, .1, .3] });
    document.querySelectorAll('.page').forEach(page => pageObserver.observe(page));
  } else {
    enterObjects(document.getElementById('home'), pageObjects);
  }

  // Re-enter fresh objects after a department change.
  for (const id of ['dept-panel']) {
    const container = document.getElementById(id);
    if (!container) continue;
    let frame = 0;
    new MutationObserver(() => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        enterObjects(container, '.dept-copy > *, .dept-demo', { duration: 480, stagger: 45 });
      });
    }).observe(container, { childList: true });
  }

  const explorer = document.getElementById('explorer');
  if (explorer) {
    new MutationObserver(() => {
      if (explorer.open) enterObjects(explorer, '.explorer-heading > *, .map-card', { duration: 580, stagger: 70 });
    }).observe(explorer, { attributes: true, attributeFilter: ['open'] });
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-dept-view], [data-future-view]');
    if (!button) return;
    enterObjects(button.closest('.page'), '.dept-copy, .dept-demo, .future-paths > div, .future-contact > *', { duration: 460, stagger: 55 });
  });

  // Turning off motion also cancels any entrance that is already in progress.
  reducedMotion.addEventListener?.('change', () => {
    if (!reducedMotion.matches) return;
    document.querySelectorAll('body *').forEach(element => activeAnimations.get(element)?.cancel());
  });
})();

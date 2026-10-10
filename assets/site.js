'use strict';

// A manual gallery: no autoplay, timers, network calls or dependencies.
const tablist = document.querySelector('.scene-tabs');
const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));

function selectScene(index, moveFocus = false) {
  tabs.forEach((tab, current) => {
    const selected = current === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    panels[current].hidden = !selected;
  });
  if (moveFocus) tabs[index].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectScene(index));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectScene(next, true);
    }
  });
});
tablist.hidden = false;

// Fetch the hidden scenes' images once the page has loaded, so switching scenes never shows an empty frame.
window.addEventListener('load', () => {
  panels.forEach(panel => panel.querySelectorAll('img[loading="lazy"]').forEach(img => { img.loading = 'eager'; }));
});

// Content stays visible if JavaScript is disabled or this API is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-top, .project-card, .research-list li').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
}

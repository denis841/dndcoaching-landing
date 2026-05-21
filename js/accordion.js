(function () {
  document.querySelectorAll('[data-accordion]').forEach(accordion => {
    const button = accordion.querySelector('.accordion-item');
    const panel = accordion.querySelector('.accordion-panel');
    const chevron = accordion.querySelector('.accordion-chevron');
    if (!button || !panel) return;

    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      panel.style.gridTemplateRows = isOpen ? '0fr' : '1fr';
      if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    });
  });
})();

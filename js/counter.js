(function () {
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

  function animate(el) {
    const target = parseFloat(el.dataset.countTo);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 1400;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const value = target * easeOutCubic(progress);
      el.textContent = value.toFixed(decimals);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-count-to]').forEach(el => {
      el.textContent = parseFloat(el.dataset.countTo).toFixed(parseInt(el.dataset.decimals || '0', 10));
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('[data-count-to]').forEach(el => observer.observe(el));
})();

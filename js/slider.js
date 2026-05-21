(function () {
  function initSlider(root) {
    const after = root.querySelector('.ba-img-after');
    const rule = root.querySelector('.ba-rule');
    const handle = root.querySelector('.ba-handle');
    if (!after || !rule || !handle) return;

    let pct = 50;
    let dragging = false;

    function setPct(value) {
      pct = Math.max(0, Math.min(100, value));
      after.style.clipPath = `inset(0 0 0 ${pct}%)`;
      rule.style.left = `${pct}%`;
      handle.style.left = `${pct}%`;
    }

    function pctFromClientX(clientX) {
      const r = root.getBoundingClientRect();
      return ((clientX - r.left) / r.width) * 100;
    }

    function onDown(e) {
      dragging = true;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPct(pctFromClientX(x));
      e.preventDefault();
    }
    function onMove(e) {
      if (!dragging) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      setPct(pctFromClientX(x));
    }
    function onUp() { dragging = false; }

    root.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    root.addEventListener('touchstart', onDown, { passive: false });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    handle.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') setPct(pct - 4);
      else if (e.key === 'ArrowRight') setPct(pct + 4);
    });

    setPct(50);
  }

  document.querySelectorAll('[data-ba-slider]').forEach(initSlider);
})();

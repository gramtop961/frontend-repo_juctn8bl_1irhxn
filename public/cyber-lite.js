/* Cyber Lite - Shared JS for animations and interactions */
(function(){
  // Sticky navbar active link
  const setActiveNav = () => {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach(a => {
      const href = a.getAttribute('href');
      const isHome = (path === '' || path === '/' || path === 'index.html') && (href === '/' || href.endsWith('index.html'));
      const active = isHome || href.endsWith(path);
      a.classList.toggle('active', !!active);
    });
  };
  setActiveNav();

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => io.observe(el));

  // Animated counters
  const counters = document.querySelectorAll('[data-count]');
  const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = parseInt(el.getAttribute('data-duration'), 10) || 1400;
    const start = 0; const startTime = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - startTime) / duration);
      const val = Math.floor(start + (target - start) * easeOutCubic(p));
      el.textContent = val.toLocaleString();
      if(p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const cObs = new IntersectionObserver((entries)=>{
    entries.forEach(e => { if(e.isIntersecting){ animateCount(e.target); cObs.unobserve(e.target); } });
  }, { threshold: 0.6 });
  counters.forEach(c => cObs.observe(c));

  // Scroll to top
  const toTop = document.getElementById('toTop');
  if(toTop){
    window.addEventListener('scroll', () => {
      const show = window.scrollY > 320;
      toTop.classList.toggle('show', show);
    });
    toTop.addEventListener('click', (e) => {
      e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  // Input focus glow
  document.querySelectorAll('.form-control').forEach(inp => {
    inp.addEventListener('focus', () => inp.classList.add('glow'));
    inp.addEventListener('blur', () => inp.classList.remove('glow'));
  });

  // Smooth hash scroll (for same-page anchors)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
})();

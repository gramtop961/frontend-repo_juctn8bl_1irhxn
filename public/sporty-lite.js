// Sporty Lite JS: sticky nav active link, scroll reveal, simple slider, to-top, smooth anchors

(function(){
  const header = document.querySelector('.navbar');
  const toTop = document.querySelector('.to-top');

  // Sticky active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  function setActive() {
    let current = '';
    sections.forEach(sec => {
      const top = window.scrollY + 120; // offset for navbar
      if (top >= sec.offsetTop && top < sec.offsetTop + sec.offsetHeight) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href') || '';
      if (href.includes(`#${current}`) || link.dataset.page === document.body.dataset.page) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActive);
  window.addEventListener('load', setActive);

  // IntersectionObserver scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal, .reveal-slide, .reveal-zoom').forEach(el => io.observe(el));

  // Simple testimonials slider (auto + controls if present)
  const sliders = document.querySelectorAll('[data-slider]');
  sliders.forEach(slider => {
    const track = slider.querySelector('[data-track]');
    const items = slider.querySelectorAll('[data-item]');
    let index = 0;
    function go(i){ index = (i + items.length) % items.length; track.style.transform = `translateX(-${index*100}%)`; }
    go(0);
    const prev = slider.querySelector('[data-prev]');
    const next = slider.querySelector('[data-next]');
    prev && prev.addEventListener('click', ()=>go(index-1));
    next && next.addEventListener('click', ()=>go(index+1));
    setInterval(()=>go(index+1), 5000);
  });

  // To Top button
  function toggleToTop(){
    if(!toTop) return;
    if (window.scrollY > 400) toTop.classList.add('show'); else toTop.classList.remove('show');
  }
  window.addEventListener('scroll', toggleToTop);
  window.addEventListener('load', toggleToTop);
  toTop && toTop.addEventListener('click', (e)=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      }
    });
  });
})();

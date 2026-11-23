
// Nav burger
 const burger = document.getElementById('navBurger');
  const panel = document.getElementById('mobilePanel');
  const scrim = document.getElementById('scrim');
 
  function toggleMenu(){
    const isOpen = panel.classList.toggle('open');
    scrim.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    burger.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
 
  burger.addEventListener('click', toggleMenu);
  scrim.addEventListener('click', toggleMenu);
 
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (panel.classList.contains('open')) toggleMenu();
  }));


// FAQ
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-answer.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-btn.open').forEach(b => b.classList.remove('open'));
  if (!isOpen) { ans.classList.add('open'); btn.classList.add('open'); }
}

// Root cause responsive layout fix
function fixRootLayout() {
  const rootSteps = document.querySelector('.root-steps') || document.querySelector('[style*="grid-template-columns:1fr auto 1fr auto 1fr"]');
  const wrap = document.querySelector('.root-section .section-inner > div[style]');
  if (wrap && window.innerWidth < 900) {
    wrap.style.gridTemplateColumns = '1fr';
    wrap.querySelectorAll('.root-arrow').forEach(a => a.style.display = 'none');
  } else if (wrap) {
    wrap.style.gridTemplateColumns = '1fr auto 1fr auto 1fr';
    wrap.querySelectorAll('.root-arrow').forEach(a => a.style.display = 'flex');
  }
}
window.addEventListener('resize', fixRootLayout);
fixRootLayout();


  /* Hover highlight on benefit cards */
  document.querySelectorAll('.ben-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      document.querySelectorAll('.ben-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

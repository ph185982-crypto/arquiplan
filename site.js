const WA_NUM = '556285247676';

function rewriteWaLinks(){
  document.querySelectorAll('.wl').forEach(e=>{
    e.href = 'https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(e.dataset.m || 'Olá! Vim pelo site da Arquiplan.');
    e.target = '_blank'; e.rel = 'noopener';
  });
}

function initMobileMenu(){
  const bg = document.getElementById('bg'), mm = document.getElementById('mm');
  if(!bg || !mm) return;
  bg.onclick = () => mm.classList.toggle('open');
  document.querySelectorAll('.mn').forEach(a => a.onclick = () => mm.classList.remove('open'));
}

function initRevealOnScroll(selector, {threshold = .12, fallbackMs = 2200} = {}){
  const els = document.querySelectorAll(selector);
  try{
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    }), {threshold, rootMargin:'0px 0px -40px 0px'});
    els.forEach(e => io.observe(e));
  }catch(err){
    els.forEach(e => e.classList.add('in'));
  }
  setTimeout(() => document.querySelectorAll(selector + ':not(.in)').forEach(e => e.classList.add('in')), fallbackMs);
}

rewriteWaLinks();
initMobileMenu();

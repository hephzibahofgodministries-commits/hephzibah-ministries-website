(function(){
  const target = new Date('2026-11-13T00:00:00');
  const ids = ['days','hours','minutes','seconds'];
  const note = document.getElementById('countdown-note');
  function update(){
    const now = new Date();
    let diff = target.getTime() - now.getTime();
    if(diff <= 0){
      ids.forEach(id => document.getElementById(id).textContent = '00');
      note.textContent = 'Today is our anniversary celebration. Ebenezer!';
      return;
    }
    const values = [
      Math.floor(diff / 86400000),
      Math.floor((diff % 86400000) / 3600000),
      Math.floor((diff % 3600000) / 60000),
      Math.floor((diff % 60000) / 1000)
    ];
    ids.forEach((id,i) => document.getElementById(id).textContent = String(values[i]).padStart(2,'0'));
    note.textContent = 'Countdown is to the beginning of Friday, 13 November. Service time will be announced.';
  }
  update(); window.setInterval(update,1000);
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.navlinks');
  toggle.addEventListener('click',function(){
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click',()=> {
    links.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
  }));
})();

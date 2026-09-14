/* LIYA modern mobile navigation */
(function(){
 function pageFile(){return (location.pathname.split('/').pop()||'index.html').toLowerCase();}
 function makeNav(){
  if(document.querySelector('.liya-mobile-bottom-nav')||document.body.classList.contains('admin-page')) return;
  var f=pageFile();
  var home=f==='index.html'||f==='';
  var dest=f==='tours.html';
  var gallery=f==='gallery.html';
  var about=f==='about.html';
  var nav=document.createElement('nav'); nav.className='liya-mobile-bottom-nav'; nav.setAttribute('aria-label','Mobile navigation');
  var items=[
   ['index.html','⌂','Home',home],
   ['tours.html','⌖','Explore',dest],
   ['tours.html#excursionsSection','✦','Tours',false],
   ['gallery.html','▦','Gallery',gallery],
   ['#contactSection','→','Plan',false]
  ];
  nav.innerHTML=items.map(function(x){return '<a href="'+x[0]+'" class="'+(x[3]?'active ':'')+(x[2]==='Plan'?'lm-plan':'')+'"><span class="lm-icon">'+x[1]+'</span><span>'+x[2]+'</span></a>';}).join('');
  document.body.appendChild(nav);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',makeNav);else makeNav();
})();

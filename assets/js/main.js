// mobile nav toggle + year
(function(){
  var t=document.querySelector('.nav-toggle'),n=document.querySelector('.nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);});}
  var y=document.querySelector('.foot-bottom span');
})();

//  menu
const menuBtn = document.querySelector('.menu_btn');
const nav = document.querySelector('.nav_wrap');
const closeBtn = document.querySelector('.close_btn');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
  nav.classList.toggle('open');
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click',function(){
    nav.classList.remove('open');
    body.style.overflow = 'auto';
})
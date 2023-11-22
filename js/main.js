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

// bag
const bagBtn = document.querySelector('.bag');
const bag = document.querySelector('.bag_wrap');
const bagCloseBtn = document.querySelector('.bag_side >.close_btn');

bagBtn.addEventListener('click',function(){
    bag.classList.toggle('open');
    body.style.overflow = 'hidden';
})

bagCloseBtn.addEventListener('click',function(){
    bag.classList.remove('open');
    body.style.overflow = 'auto';
})
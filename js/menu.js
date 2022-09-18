

// =============меню бургер на JQuery=================
// $(document).ready(function () {
//   $('#burger').click(function (event) {
//     $('#burger,#menu').toggleClass('active')
//     $('body').toggleClass('lock')
//   });
// });


//==============Меню бургер на чистом JS===============
// window.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('#burger').addEventListener('click', function () {
//     document.querySelector('#menu').classList.toggle('active');
//     document.querySelector('#burger').classList.toggle('active')
//     document.querySelector('body').classList.toggle('lock')
//   });
// });


//==============Меню бургер на чистом JS===============
const menu = document.querySelector('.header__nav')
const menuBtn = document.querySelector('.burger')

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menu.querySelectorAll('.nav__link, .nav__btn').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}



//==============Плавная прокрутка по якорям ===============
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    const BlockID = anchor.getAttribute('href').substring(1);

    document.getElementById(BlockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

})

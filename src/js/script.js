const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});
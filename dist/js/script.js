const humburger = document.querySelector('.humburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});

const percentages = document.querySelectorAll('.progress__percentage');
const fill = document.querySelectorAll('.progress__fill');

percentages.forEach((item, i) => {
    fill[i].style.width = item.innerHTML;
});
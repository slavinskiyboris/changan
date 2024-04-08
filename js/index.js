const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const address = document.querySelector('.subheader__info');
const time = document.querySelector('.subheader__time');
const button = document.querySelector('.header__button');

if (burger && nav && address && time) {
    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('open');
        address.classList.toggle('open');
        time.classList.toggle('open');
        button.classList.toggle('open');
    });
}

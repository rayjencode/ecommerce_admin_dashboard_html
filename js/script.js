const navBtn = document.querySelector('.header__collapse--btn');
const nav = document.querySelector('.nav');
const navWrapper = document.querySelector('.navWrapper');
const navClose = document.querySelector('.nav__close');

navBtn.addEventListener('click', () => {
    console.log(`object`);
    nav.classList.toggle('show');
    // navWrapper.classList.toggle('show-item');
});

navClose.addEventListener('click', (e) => {
    console.log(e.target.parentElement);
    nav.classList.remove('show');
    // navWrapper.classList.remove('show-item');
});

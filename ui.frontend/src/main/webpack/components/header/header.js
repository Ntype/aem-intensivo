document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.itv-header__burger');
    const navMenu = document.querySelector('.itv-header__nav');

    if(burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('is-active');
            navMenu.classList.toggle('is-open');
        });
    }
});

import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.cardlist--vertical .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 26,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
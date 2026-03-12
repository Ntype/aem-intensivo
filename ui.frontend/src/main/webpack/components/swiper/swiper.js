import Swiper from 'swiper';

const swipers = document.querySelectorAll('.swiper');

if (swipers.length) {
  swipers.forEach((element) => {
    new Swiper(element, {
      loop: true,
      autoplay: {
        delay: 3000
      }
    });
  });
}

(function (document) {
  'use strict';

  function initTitleClick() {
    var titles = document.querySelectorAll('.js-title');

    if (!titles || titles.length === 0) {
      return;
    }

    titles.forEach(function (el) {
      el.addEventListener('click', function () {
        alert('hola soy title');
      });
    });
  }
  function initScrollReveal() {
    var animatedTitles = document.querySelectorAll('.js-title--scroll-reveal');
    if (!animatedTitles || animatedTitles.length === 0) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    animatedTitles.forEach(function (el) {
      observer.observe(el);
    });
  }
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initTitleClick();
      initScrollReveal();
    });
  } else {
    initTitleClick();
  }
})(document);

(function (document) {
  "use strict";

  // ====================================
  // FUNCIONALIDAD 1: Click en título
  // ====================================
  function initTitleClick() {
    var titles = document.querySelectorAll(".js-title");

    if (!titles || titles.length === 0) {
      return;
    }

    titles.forEach(function (el) {
      el.addEventListener("click", function () {
        alert("hola soy title");
      });
    });
  }

  // ====================================
  // FUNCIONALIDAD 2: Scroll Reveal Animation
  // ====================================
  function initScrollReveal() {
    // 1. Seleccionar todos los títulos que tienen animación activada
    var animatedTitles = document.querySelectorAll(".cmp-supertitle--animated");

    // Si no hay títulos con animación, no hacer nada
    if (!animatedTitles || animatedTitles.length === 0) {
      return;
    }

    // 2. Crear el IntersectionObserver
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          // 3. Si el elemento entra en viewport
          if (entry.isIntersecting) {
            // Añadir la clase que dispara la animación
            entry.target.classList.add("is-visible");
            
            // Dejar de observar este elemento (animación solo una vez)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Opciones del observer
        threshold: 0.1, // Se activa cuando 10% del elemento es visible
        rootMargin: "0px" // Sin margen adicional
      }
    );

    // 4. Observar cada título animado
    animatedTitles.forEach(function (title) {
      observer.observe(title);
    });
  }

  // ====================================
  // INICIALIZACIÓN
  // ====================================
  function init() {
    initTitleClick();      // Inicializar clicks
    initScrollReveal();    // Inicializar animaciones scroll
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(document);
(function (document) {
  "use strict";

  function initTitleClick() {
    var titles = document.querySelectorAll(".js-title");

    if (!titles || titles.length === 0) {
      return;
    }

    titles.forEach(function (el) {
      el.addEventListener("click", function () {
        alert("hola soy title del primer ejercicio");
      });
    });
  }

  // Animar cuando el elemento entra en pantalla
  function initAnimacionAlAparecerSimple() {
    var elementos = document.querySelectorAll('.cmp-supertitle[data-animate="true"]');
    console.log(" ✅ Elementos encontrados:", elementos.length, elementos);

    if (!elementos || elementos.length === 0) {
      return;
    }

    function comprobarSiEstaEnPantalla() {
      elementos.forEach(function (el) {
        // Si ya está animado, no hacemos nada
        if (el.classList.contains("animado")) {
          return;
        }

        var posicion = el.getBoundingClientRect();

        // Si el elemento entra en la pantalla
        if (posicion.top < window.innerHeight && posicion.bottom > 0) {
          el.classList.add("animado");
        }
      });
    }

    // Comprobamos al cargar
    comprobarSiEstaEnPantalla();

    // Y cada vez que se hace scroll
    window.addEventListener("scroll", comprobarSiEstaEnPantalla);
  }
  console.log("✅ supertitle.js cargado");

  // Ejecutar cuando el DOM esté listo
  function iniciar() {
    initTitleClick();
    initAnimacionAlAparecerSimple();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})(document);
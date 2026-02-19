(function (document) {
  "use strict";

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
  // Ejecutar cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTitleClick);
  } else {
    initTitleClick();
  }
})(document);
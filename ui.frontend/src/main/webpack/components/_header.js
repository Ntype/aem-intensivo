(function() {
    "use strict";
    document.addEventListener("DOMContentLoaded", function() {
        const burger = document.querySelector(".header-lp__burger");
        const navMobile = document.querySelector(".header-lp__nav--mobile");

        if (!burger || !navMobile) return;

        // Mover el nav al body para escapar del stacking context del header
        document.body.appendChild(navMobile);

        burger.addEventListener("click", function() {
            burger.classList.toggle("is-active");
            navMobile.classList.toggle("is-active");
        });

        // Cerrar al hacer click en un enlace
        navMobile.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", function() {
                burger.classList.remove("is-active");
                navMobile.classList.remove("is-active");
            });
        });
    });
})();
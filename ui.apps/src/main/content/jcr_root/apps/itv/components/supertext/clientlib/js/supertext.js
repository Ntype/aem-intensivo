(function() {
    "use strict";
    function init() {
        const buttons = document.querySelectorAll('.supertext__mode-toggle');
        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const card = this.closest('.supertext');
                card.classList.toggle('supertext--dark-mode');
                
                // Cambiamos el texto del botón
                this.textContent = card.classList.contains('supertext--dark-mode') 
                    ? "☀️ Modo Claro" 
                    : "🌓 Modo Lectura";
            });
        });
    }
    document.addEventListener("DOMContentLoaded", init);
})();
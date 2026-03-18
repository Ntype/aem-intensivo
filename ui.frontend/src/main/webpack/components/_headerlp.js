(function (){
    'use strict';

    function menuHamburguesa() {
        const hamburguesa = document.querySelector('.header-lp__hamburger');
        const nav = document.querySelector('.header-lp__nav');
        
        if (!menuHamburguesa || !nav) return;
        
        hamburguesa.addEventListener('click', ()=>{
            nav.classList.toggle('active');
        });
    }

    // Inicializar cuando el DOM esté listo
    if (document.readyState !== 'loading') {
        menuHamburguesa();
    } else {
        document.addEventListener('DOMContentLoaded', menuHamburguesa);
    }

})();
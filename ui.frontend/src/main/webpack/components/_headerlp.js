(function() {
    'use strict';
    
    document.addEventListener('click', function(e) {
        const hamburger = e.target.closest('.header-lp__hamburger');
        
        if (hamburger) {
            const nav = document.querySelector('.header-lp__nav');
            if (nav) {
                nav.classList.toggle('active');
                console.log('Menu toggled'); // Para debug
            }
        }
    });
})();
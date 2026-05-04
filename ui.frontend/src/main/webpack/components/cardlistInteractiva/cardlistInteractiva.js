(function () {
    "use strict";

    function initCardListInteraction() {
        const cards = document.querySelectorAll('.js-expandable-card');

        if (cards.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6 
        };

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (window.innerWidth < 768) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-active-mobile');
                    } else {
                        entry.target.classList.remove('is-active-mobile');
                    }
                }
            });
        }, observerOptions);

        cards.forEach(card => cardObserver.observe(card));

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                cards.forEach(card => card.classList.remove('is-active-mobile'));
            }
        });
    }

    if (document.readyState !== "loading") {
        initCardListInteraction();
    } else {
        document.addEventListener("DOMContentLoaded", initCardListInteraction);
    }
})();
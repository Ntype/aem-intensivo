(function (document) {
  "use strict";

  function initScrollReveal() {
    const revealObject = document.querySelectorAll(".cmp-supertitle--reveal");

    if (revealObject.length === 0) {
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
              }
            });
    },{
    threshold: 0.1
    });
    revealObject.forEach(el => observer.observe(el));
  }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initScrollReveal);
    } else {
      initScrollReveal();
    }
})(document);
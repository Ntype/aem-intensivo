(function (document) {
  "use strict";
//1. BODY: Botones que modifican el tamaño de fuente
    function initAccessibility() {
        var bodies = document.querySelectorAll(".cmp-supertext--body");

        if (!bodies || bodies.length === 0) return;
        bodies.forEach(function (body) {
            var content = body.querySelector(".cmp-supertext__content");
            if (!content) return;

            var btnContainer = document.createElement("div"); //Crear contenedor para los botones
            btnContainer.className = "cmp-supertext__size-controls";
            btnContainer.innerHTML = 
                '<button class="btn-decrease" title="Disminuir texto">A-</button><button class="btn-increase" title="Aumentar texto">A+</button>';

            content.parentNode.insertBefore(btnContainer, content); //Colocar los botones antes del contenido del texto
            var currentSize = 14; //Tamaño base

            btnContainer.querySelector(".btn-increase").addEventListener("click", function(){
                if (currentSize < 24){ //Establecemos tamaño máximo
                    currentSize +=2;
                    content.style.fontSize = currentSize + "px";
                }
            });
            btnContainer.querySelector(".btn-decrease").addEventListener("click", function(){
                if (currentSize > 10){ //Establecemos tamaño minimo
                    currentSize -=2;
                    content.style.fontSize = currentSize + "px";
                }
            });
        });
    }

//2. QUOTE: Animación para aparición del texto
    function initTypewriter() {
        var quotes = document.querySelectorAll(".cmp-supertext--quote.cmp-supertext--typewriter");
        if (!quotes || quotes.length === 0) return;

        //se necesita un observador para que la animación comience al hacer scroll
        var observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                startTyping(entry.target);
                obs.unobserve(entry.target); //parar observador para que no se repita
              }
            });
        },{ threshold: 0.5 });
        quotes.forEach(function(quote){
            observer.observe(quote);
        });

        function startTyping(quoteNode){ //función para efecto tecleo
            var paragraphs = quoteNode.querySelectorAll(".cmp-supertext__content p"); //Buscar el párrafo en el contenido
            if (!paragraphs || paragraphs.length === 0) return;

            var fullText = []; //Guarda el texto original
            paragraphs.forEach(function(p) {
                fullText.push(p.textContent);
                p.textContent = ""; //Vacía el texto en pantalla para cada párrafo
            });
            
            var pIndex = 0; //Índice del párrafo actual
            var charIndex = 0; //Índice de la letra actual
            function typeWriter(){
                if (pIndex >= paragraphs.length){
                    return; 
                }
                var currentP = paragraphs[pIndex];
                var currentText = fullText[pIndex];
                if (charIndex === 0){
                    currentP.classList.add("is-typing"); //Añadir clase para mostrar cursor
                }
                if (charIndex < currentText.length){
                    currentP.textContent += currentText.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 70); //Velocidad aparición letras
                }else{
                    currentP.classList.remove("is-typing"); //Eliminar el cursor al terminar párrafo
                    pIndex++; //Pasar al siguiente párrafo
                    charIndex = 0;
                    if (pIndex < paragraphs.length){
                        setTimeout(typeWriter, 300); //Pausa entre párrafos
                    }else{
                        quoteNode.classList.add("typing-complete"); //Añadir clase para mostrar comilla final
                    }
                }
            }

            setTimeout (typeWriter, 300); //Pausa antes de empezar para que no lo haga de inmediato
        }
    }
//3. DISCLAIMER: Ocultar al hacer click 
    function initDisclaimerDestructor() {
        var disclaimers = document.querySelectorAll(".cmp-supertext--disclaimer");

        if (!disclaimers || disclaimers.length === 0) {
        return;
        }
        disclaimers.forEach(function (el) {
            el.addEventListener("click", function () {
                el.style.display = 'none';
            });
        });
    }

//INICIAR TODO 
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function(){
            initAccessibility();
            initTypewriter();
            initDisclaimerDestructor();
      });
    } else {
        initAccessibility();
        initTypewriter();
        initDisclaimerDestructor();
    }
})(document);
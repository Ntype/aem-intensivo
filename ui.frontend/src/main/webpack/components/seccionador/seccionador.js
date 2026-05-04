document.addEventListener("DOMContentLoaded", () => {
    const selectors = document.querySelectorAll('.itv-motor-selector');

    selectors.forEach(selector => {
        const mode = selector.getAttribute('data-mode');
        const buttons = selector.querySelectorAll('.js-motor-btn');
        const panels = selector.querySelectorAll('.js-motor-panel');

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const targetPanel = selector.querySelector(`#${targetId}`);

                if (mode === 'tabs') {

                    buttons.forEach(b => b.classList.remove('is-active'));
                    panels.forEach(p => p.classList.remove('is-active'));

                    this.classList.add('is-active');
                    targetPanel.classList.add('is-active');
                } 
                

                else if (mode === 'accordion') {

                    targetPanel.classList.toggle('is-active');
                    
                    // Rotar la flecha
                    const icon = this.querySelector('.icon');
                    if(targetPanel.classList.contains('is-active')){
                        icon.style.transform = "rotate(0deg)";
                    } else {
                        icon.style.transform = "rotate(-90deg)";
                    }
                }
            });
        });
    });
});
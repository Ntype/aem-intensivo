document.addEventListener('DOMContentLoaded', () => {

    const animateNumbers = (el) => {
        const targetAttr = el.getAttribute('data-target');
        if (!targetAttr) return;
        const target = parseInt(targetAttr);
        if (isNaN(target)) return;

        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / target)) || 20;
        let current = 0;

        const timer = setInterval(() => {
            current += Math.ceil(target / 50) || 1;
            if (current >= target) {
                el.innerText = target;
                clearInterval(timer);
            } else {
                el.innerText = current;
            }
        }, stepTime > 20 ? stepTime : 20);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('js-stats-container')) {
                    const numbers = entry.target.querySelectorAll('.js-stat-number');
                    numbers.forEach(num => animateNumbers(num));
                    observer.unobserve(entry.target);
                }
                if (entry.target.classList.contains('itv-timeline__item')) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            }      
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.js-stats-container').forEach(container => {
        observer.observe(container);
    });
    document.querySelectorAll('.itv-timeline__item').forEach(item => {
        observer.observe(item);
    });
});

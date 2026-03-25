document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('#btnWp-sticky');

    if(whatsappBtn) {
        const scrollThreshold = 88; 
        const handleScroll = () => {
            if (window.scrollY > scrollThreshold) {

                whatsappBtn.classList.add('is-sticky');
            } else {
                whatsappBtn.classList.remove('is-sticky');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
});

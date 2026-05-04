document.addEventListener("DOMContentLoaded", () => {

    const heroes = document.querySelectorAll(".itv-hero");

    heroes.forEach(heroContainer => {
        const isEditMode = heroContainer.getAttribute('data-edit-mode') === 'true';

        const videos = heroContainer.querySelectorAll(".js-hero-video");
        const btnPlay = heroContainer.querySelector(".js-hero__icon-play");
        const btnPause = heroContainer.querySelector(".js-hero__icon-pause");

        if (isEditMode) {
            console.log("AEM Edit Mode (Server-Side): Vídeos de Rick Astley bloqueados.");
            if (btnPlay && btnPause) {
                btnPlay.style.display = "flex";
                btnPause.style.display = "none";
            }
            return;
        }

        videos.forEach(video => {
            let playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay bloqueado por el navegador. Esperando al usuario.");
                    if(btnPlay && btnPause) {
                        btnPlay.style.display = "flex";
                        btnPause.style.display = "none";
                    }
                });
            }
        });

        const toggleBtn = heroContainer.querySelector(".js-hero-video-toggle");
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                if(videos.length > 0) {
                    const isPaused = videos[0].paused;

                    videos.forEach(video => {
                        if(isPaused) {
                            video.play();
                        } else {
                            video.pause();
                        }
                    });

                    if(isPaused) {
                        if(btnPlay) btnPlay.style.display = "none";
                        if(btnPause) btnPause.style.display = "flex";
                        this.setAttribute('aria-label', 'Pausar vídeo');
                    } else {
                        if(btnPlay) btnPlay.style.display = "flex";
                        if(btnPause) btnPause.style.display = "none";
                        this.setAttribute('aria-label', 'Reproducir vídeo');
                    }
                }
            });
        }
    });
});
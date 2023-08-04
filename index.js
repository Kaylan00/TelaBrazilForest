function initAnimateScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const header = document.querySelector('.header')
    if (sections.length) {
        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - window.innerHeight * 0.6 //diminuindo 60% da tela ai vai para qualquer tela
                if (sectionTop < 0) {
                    section.classList.add('active')
                }   
            })
            
        }
        animateScroll()
        window.addEventListener('scroll', animateScroll);
    }
}

initAnimateScroll();
document.addEventListener("DOMContentLoaded", function () {
    function carroselImg() {
        const slideshows = document.querySelectorAll('.slideshow-container');

        slideshows.forEach((slideshow) => {
            const images = slideshow.querySelectorAll('img');
            const prevBtn = slideshow.querySelector('.controls #prevBtn');
            const nextBtn = slideshow.querySelector('.controls #nextBtn');
            const indicators = slideshow.querySelectorAll('.indicators .indicator');
            const caption = slideshow.querySelector('.caption');

            let currentImageIndex = 0;
            let intervalId = setInterval(changeImage, 1200);

            function changeImage(index) {
                images[currentImageIndex].style.opacity = 0;
                indicators[currentImageIndex].classList.remove('active');
                
                currentImageIndex = typeof index === 'number' ? index : (currentImageIndex + 1) % images.length;

                images[currentImageIndex].style.opacity = 1;
                indicators[currentImageIndex].classList.add('active');
                updateCaption();
            }

            function updateCaption() {
                caption.textContent = images[currentImageIndex].getAttribute('alt');
            }

            function pauseSlideshow() {
                clearInterval(intervalId);
            }

            function resumeSlideshow() {
                intervalId = setInterval(changeImage, 1200);
            }

            prevBtn.addEventListener('click', () => {
                pauseSlideshow();
                const newIndex = (currentImageIndex - 1 + images.length) % images.length;
                changeImage(newIndex);
            });

            nextBtn.addEventListener('click', () => {
                pauseSlideshow();
                const newIndex = (currentImageIndex + 1) % images.length;
                changeImage(newIndex);
            });

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    pauseSlideshow();
                    changeImage(index);
                });
            });

            slideshow.addEventListener('click', () => {
                if (intervalId) {
                    clearInterval(intervalId);
                    intervalId = null;
                } else {
                    intervalId = setInterval(changeImage, 1200);
                }
            });

            updateCaption();
        });
    }

    carroselImg();
});

function acordeao(){
    const botoesAcordeao = document.querySelectorAll('.arcordeao');

    botoesAcordeao.forEach(botao => {
        botao.addEventListener('click', () => {
            // Toggle da classe "ativo" no botão
            botao.classList.toggle('ativo');

            // Encontrar o painel relacionado a esse botão
            const painel = botao.nextElementSibling;

            // Toggle da exibição do painel
            if (painel.style.display === 'block') {
                painel.style.display = 'none';
            } else {
                painel.style.display = 'block';
            }
        });
    });
}
acordeao();
function toggleMenu() {
    let menu = document.getElementById('mega-menu');
    let icon = document.getElementById('menu-icon');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}

AOS.init();

window.addEventListener('scroll', function() {
    var banner = document.querySelector('.banner');
    if (window.scrollY > 0) {
        banner.classList.add('blur');
    } else {
        banner.classList.remove('blur');
    }
});

document.addEventListener('scroll', function() {
    var element = document.getElementById('textElement');
    var rect = element.getBoundingClientRect();
    var viewHeight = window.innerHeight;

    if (rect.top < viewHeight && rect.bottom >= 0) {
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
    }
});


const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite looping infinito
    autoplay: {
      delay: 3000, // Tempo entre as transições (em milissegundos)
      disableOnInteraction: false, // Continua rodando após interação do usuário
    },
    speed: 600, // Velocidade da transição (em milissegundos)
    slidesPerView: 1, // Número de slides visíveis
    spaceBetween: 0, // Espaço entre slides
    pagination: false, // Desativa os dots
    navigation: false, // Desativa as setas
  });
  
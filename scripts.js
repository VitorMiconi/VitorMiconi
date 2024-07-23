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

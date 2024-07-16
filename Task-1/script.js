window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgb(175, 96, 214)';
    } else {
        navbar.style.backgroundColor = 'darkorchid';
    }
});

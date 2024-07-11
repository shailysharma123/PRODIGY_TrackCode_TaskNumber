window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'white';
    } else {
        navbar.style.backgroundColor = 'blue';
    }
});

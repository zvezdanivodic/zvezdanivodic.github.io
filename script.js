// Primer jednostavne animacije pri skrolovanju
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.opacity = 1 - window.scrollY / 400;
});

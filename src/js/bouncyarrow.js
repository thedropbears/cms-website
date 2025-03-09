window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.scroll-arrow');
    if (window.scrollY > 50) {
        arrow.classList.add('hidden');
    } else {
        arrow.classList.remove('hidden');
    }
});

document.querySelector('.scroll-arrow').addEventListener('click', function() {
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
});
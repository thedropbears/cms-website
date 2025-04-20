document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.scroll-arrow');
    
    if (arrow) {
        // Make the arrow visible
        arrow.style.opacity = "1";
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                arrow.classList.add('hidden');
            } else {
                arrow.classList.remove('hidden');
            }
        });

        arrow.addEventListener('click', function() {
            document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
        });
        
        // Log presence of arrow to console
        console.log('Scroll arrow initialized');
    } else {
        console.log('Scroll arrow not found in DOM');
    }
});
/**
 * sets up the navigation scroll effect
 * adds a 'scrolled' class to the nav element when the page is scrolled
 */
export function setupScrollEffect() {
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
} 

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupScrollEffect); 
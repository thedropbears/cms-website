import initializeNavigation from './navigation.js';

/**
 * loads the navigation HTML from an external file
 * sets the active state based on the current path
 */
export async function loadNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (!navPlaceholder) return;

    try {
        const response = await fetch('/src/components/nav.html');
        const html = await response.text();
        navPlaceholder.innerHTML = html;

        // set active state based on current path
        const currentPath = window.location.pathname;
        const navId = `nav-${currentPath.split('/')[1] || 'home'}`;
        const activeLink = document.getElementById(navId);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        initializeNavigation();
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
} 

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadNavigation); 
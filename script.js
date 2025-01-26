// script.js

/**
 * Smooth scroll for navigation links
 * 
 * This section enables smooth scrolling to sections of the page when navigation links are clicked.
 * 
 * - Listens for click events on all navigation links.
 * - Prevents the default anchor link behavior.
 * - Scrolls smoothly to the target section using the window.scrollTo method.
 */
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Alert on "Explore" button click
 * 
 * This section displays an alert message when the "Explore" button is clicked.
 * 
 * - Listens for click events on the "Explore" button.
 * - Displays an alert box with a custom message.
 */
document.querySelector('button').addEventListener('click', function() {
    alert('Explore our cybersecurity solutions!');
});
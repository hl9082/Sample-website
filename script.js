// script.js

/**
 * Continuous appear/disappear effect for images
 * 
 * This section makes images appear and disappear continuously.
 */
document.querySelectorAll('.image-container img').forEach(image => {
    setInterval(() => {
        image.classList.toggle('visible');
    }, 2000); // Change every 2 seconds
});

/**
 * Alert on "Explore" button click
 * 
 * This section displays an alert message when the "Explore" button is clicked.
 */
const exploreButton = document.querySelector('.about button');
if (exploreButton) {
    exploreButton.addEventListener('click', function() {
        alert('Explore our cybersecurity solutions!');
    });
}

/**
 * Alert on "Contact for Partnership" button click
 * 
 * This section displays an alert message when the "Contact for Partnership" button is clicked.
 */
const partnershipButton = document.querySelector('.investors button');
if (partnershipButton) {
    partnershipButton.addEventListener('click', function() {
        alert('Thank you for your interest in partnering with us! Please contact us for more details.');
    });
}

/**
 * Alert on "Investor" button click
 * 
 * This section displays an alert message when the "Investor" button is clicked.
 */
const investorButton = document.querySelector('.investor button');
if (investorButton) {
    investorButton.addEventListener('click', function() {
        alert('Thank you for your interest in investing with us! Please contact us for more details.');
    });
}
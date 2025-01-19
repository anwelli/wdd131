// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the date the document was last modified and display it in the footer
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").innerHTML = "This page was last modified on: " + lastModified.toLocaleDateString('en-US', options);

document.querySelector('.hamburger-menu').addEventListener('click', () => {
// Toggle the navigation menu
document.querySelector('nav ul').classList.toggle('show');

// Toggle the hamburger menu icon
document.querySelector('.hamburger-menu').classList.toggle('open');
});
// Add event listener to the navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', () => {
    // Hide the navigation menu
    document.querySelector('nav ul').classList.remove('show');
    
    // Close the hamburger menu icon
    document.querySelector('.hamburger-menu').classList.remove('open');
    
    });
    });
    
    // Add event listener to the window resize event
    window.addEventListener('resize', () => {
    // Hide the navigation menu if the window is resized
    document.querySelector('nav ul').classList.remove('show');
    
    // Close the hamburger menu icon if the window is resized
    document.querySelector('.hamburger-menu').classList.remove('open');
    });
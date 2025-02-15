// Get the current year
const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

// Get the last modified date
const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last modified: ${document.lastModified}`;

// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navRight = document.querySelector('.nav-right');

hamburgerMenu.addEventListener('click', () => {
navRight.classList.toggle('show');
});

// Responsive navigation menu
window.addEventListener('resize', () => {
if (window.innerWidth > 768) {
navRight.classList.remove('show');
}
});

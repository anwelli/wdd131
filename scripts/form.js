
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 }
];

const productNameSelect = document.getElementById('product-name');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

const form = document.getElementById('review-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const reviewData = {
        'product-name': formData.get('product-name'),
        'overall-rating': formData.get('overall-rating'),
        'date-of-installation': formData.get('date-of-installation'),
        'useful-features': formData.getAll('useful-features'),
        'written-review': formData.get('written-review'),
        'user-name': formData.get('user-name')
    };
    localStorage.setItem('reviewData', JSON.stringify(reviewData));
    window.location.href = 'review.html';
});

const reviewCounter = localStorage.getItem('reviewCounter');
if (reviewCounter) {
    const reviewCounterNum = parseInt(reviewCounter);
    localStorage.setItem('reviewCounter', reviewCounterNum + 1);
} else {
    localStorage.setItem('reviewCounter', 1);
}

// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the date the document was last modified and display it in the footer
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").innerHTML = "This page was last modified on: " + lastModified.toLocaleDateString('en-US', options);


// Define country data
const countryData = {
    "area": "923,768 km²",
    "population": "202,915,907",
    "capital": "Abuja",
    "languages": "English, Hausa, Yoruba, Igbo",
    "currency": "Naira (NGN)",
    "time-zone": "West Africa Time (WAT)",
    "calling-code": "+234",
    "internet-tld":".ng"
    };
// Update HTML elements with data
document.getElementById('area').textContent = countryData.area;
document.getElementById('population').textContent = countryData.population;
document.getElementById('capital').textContent = countryData.capital;
document.getElementById('languages').textContent = countryData.languages;
document.getElementById('currency').textContent = countryData.currency;
document.getElementById('time-zone').textContent = countryData['time-zone'];
document.getElementById('calling-code').textContent = countryData['calling-code'];
document.getElementById('internet-tld').textContent = countryData['internet-tld'];

// Calculate wind chill
const temperature = 50; // in Fahrenheit
const windSpeed = 10; // in miles per hour
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('wind-chill').textContent = windChill;

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill) + "°F";
    } else {
        return "N/A";
    }
}



// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the date the document was last modified and display it in the footer
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").innerHTML = "This page was last modified on: " + lastModified.toLocaleDateString('en-US', options);


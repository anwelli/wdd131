
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Austin Texas Temple",
        location: "East park street",
        dedicated: "2024, August, 17",
        area: 1801,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361-main.jpg"
      },
      {
        templeName: "Atlanta Georgia Temple",
        location: " Barfield Rd NE",
        dedicated: "1997, November, 14",
        area: 6450,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
      },
      {
        templeName: "Antofagasta Chile Temple",
        location: " Avenida de Las Palmeras",
        dedicated: "1983, December, 2",
        area: 44,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg"
      },
    ]



const templesContainer = document.getElementById("temples-container");

function createTempleCard(temple) {
const templeCard = document.createElement("div");
templeCard.classList.add("temple-card");

const templeName = document.createElement("h2");
templeName.textContent = temple.templeName;

const templeLocation = document.createElement("p");
templeLocation.textContent = temple.location;

const templeDedicated = document.createElement("p");
templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

const templeArea = document.createElement("p");
templeArea.textContent = `Area: ${temple.area} sq. ft.`;

const templeImage = document.createElement("img");
templeImage.src = temple.imageUrl;
templeImage.alt = temple.templeName;
templeImage.loading = "lazy";

templeCard.appendChild(templeName);
templeCard.appendChild(templeLocation);
templeCard.appendChild(templeDedicated);
templeCard.appendChild(templeArea);
templeCard.appendChild(templeImage);

return templeCard;
}

function filterTemples(filter) {
templesContainer.innerHTML = "";

let filteredTemples;

switch (filter) {
case "old":
filteredTemples = temples.filter(temple => {
const dedicationYear = parseInt(temple.dedicated.split(",")[0]);
return dedicationYear < 1900;
});
break;
case "new":
filteredTemples = temples.filter(temple => {
const dedicationYear = parseInt(temple.dedicated.split(",")[0]);
return dedicationYear > 2000;
});
break;
case "large":
filteredTemples = temples.filter(temple => temple.area > 90000);
break;
case "small":
filteredTemples = temples.filter(temple => temple.area < 10000);
break;
default:
filteredTemples = temples;
}

filteredTemples.forEach(temple => {
const templeCard = createTempleCard(temple);
templesContainer.appendChild(templeCard);
});
}

document.addEventListener("DOMContentLoaded", () => {
filterTemples("all");

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(navLink => {
navLink.addEventListener("click", event => {
event.preventDefault();
const filter = navLink.getAttribute("data-filter");
filterTemples(filter);
});
});
});

const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById("last-modified");
lastModifiedElement.textContent = document.lastModified;

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
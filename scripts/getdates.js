// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Get the date the document was last modified and display it in the footer
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "This page was last modified on: " +

// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("nav ul");
    navMenu.addEventListener("mouseover", function(event) {
      if (event.target.tagName === "A") {
        event.target.style.color = "#ccc";
      }
    });
    navMenu.addEventListener("mouseout", function(event) {
      if (event.target.tagName === "A") {
        event.target.style.color = "#fff";
      }
    });
  });
  
  
  
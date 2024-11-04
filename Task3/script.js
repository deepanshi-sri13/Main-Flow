// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        // Prevent form submission if there are validation errors
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        // Name validation: must be non-empty and without special characters
        if (nameInput.value.trim() === "" || !/^[a-zA-Z\s]*$/.test(nameInput.value)) {
            alert("Please enter a valid name.");
            isValid = false;
        }

        // Email validation: standard email format
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Message validation: must not be empty
        if (messageInput.value.trim() === "") {
            alert("Please enter a message.");
            isValid = false;
        }

        return isValid;
    }
});


// JavaScript for interactive menu
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "☰";
    toggleButton.classList.add("menu-toggle");
    navbar.insertBefore(toggleButton, navbar.firstChild);

    toggleButton.addEventListener("click", function() {
        navbar.classList.toggle("open");
    });
});


// JavaScript to dynamically update the current year in the footer
document.addEventListener("DOMContentLoaded", function() {
    const footerText = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Deepanshi's Webpage. All rights reserved.`;
});

// JavaScript for FAQ accordion
document.querySelectorAll(".accordion-button").forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});


// JavaScript for image carousel
let currentSlide = 0;
const carouselImages = document.querySelectorAll(".carousel-image");

document.querySelector(".carousel-next").addEventListener("click", () => {
    changeSlide(1);
});

document.querySelector(".carousel-prev").addEventListener("click", () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + carouselImages.length) % carouselImages.length;
    carouselImages.forEach((img, index) => {
        img.style.transform = `translateX(-${100 * currentSlide}%)`;
    });
}


// JavaScript for scroll-to-top button
const scrollTopButton = document.getElementById("scrollTopButton");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


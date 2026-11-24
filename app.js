
// ======================================
// IPL 2026 TICKET BOOKING WEBSITE
// JavaScript Functionality
// ======================================


// 1. GET HTML ELEMENTS
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

const matchContainer = document.getElementById("matchContainer");

const teamFilter = document.getElementById("teamFilter");

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

const matchCards = document.querySelectorAll(".match-card");


// ======================================
// 2. GRID VIEW FUNCTION
// ======================================

gridBtn.addEventListener("click", function () {

    // Remove list view class
    matchContainer.classList.remove("list-view");

    // Highlight Grid button
    gridBtn.classList.add("active");

    // Remove highlight from List button
    listBtn.classList.remove("active");

});


// ======================================
// 3. LIST VIEW FUNCTION
// ======================================

listBtn.addEventListener("click", function () {

    // Add list view class
    matchContainer.classList.add("list-view");

    // Highlight List button
    listBtn.classList.add("active");

    // Remove highlight from Grid button
    gridBtn.classList.remove("active");

});


// ======================================
// 4. TEAM FILTER FUNCTION
// ======================================

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function (card) {

        // Get teams from match card
        const teams = card.dataset.teams.split(" ");

        // Show or hide match cards
        if (
            selectedTeam === "all" ||
            teams.includes(selectedTeam)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


// ======================================
// 5. HAMBURGER MENU FUNCTION
// ======================================

menuBtn.addEventListener("click", function () {

    // Toggle mobile navigation
    navMenu.classList.toggle("active");

    // Check menu status
    const isOpen = navMenu.classList.contains("active");

    // Change hamburger icon
    menuBtn.textContent = isOpen ? "✕" : "☰";

    // Update accessibility attribute
    menuBtn.setAttribute("aria-expanded", isOpen);

});


// ======================================
// 6. CLOSE MOBILE MENU
// ======================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});


// ======================================
// 7. BOOK TICKET BUTTON FUNCTION
// ======================================

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const matchName = button.parentElement.querySelector("h3").textContent;

        alert(
            "Welcome to IPL Ticket Booking!\n\n" +
            "You selected: " + matchName +
            "\n\nThis is a booking demonstration only."
        );

    });

});


// ======================================
// 8. WEBSITE LOADED MESSAGE
// ======================================

console.log("IPL Ticket Booking Website Loaded Successfully!");
console.log("Grid View, List View, Team Filter and Mobile Menu Ready!");

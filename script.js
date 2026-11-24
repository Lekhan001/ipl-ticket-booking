
// Get HTML Elements
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");
const matchContainer = document.getElementById("matchContainer");


// GRID VIEW BUTTON
gridBtn.addEventListener("click", function() {

    matchContainer.classList.remove("list-view");

    gridBtn.classList.add("active");
    listBtn.classList.remove("active");

});


// LIST VIEW BUTTON
listBtn.addEventListener("click", function() {

    matchContainer.classList.add("list-view");

    listBtn.classList.add("active");
    gridBtn.classList.remove("active");

});


// TEAM FILTER
const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function() {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function(card) {

        const teams = card.dataset.teams.split(" ");

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


// HAMBURGER MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";

    menuBtn.setAttribute("aria-expanded", isOpen);

});


// BOOK BUTTON
document.querySelectorAll(".book-btn").forEach(function(button) {

    button.addEventListener("click", function() {

        const match = button.parentElement.querySelector("h3").textContent;

        alert("You selected " + match + ". Booking demonstration only!");

    });

});


// CLOSE MOBILE MENU
document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

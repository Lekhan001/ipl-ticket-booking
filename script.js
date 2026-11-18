
// ===== IPL TEAM FILTER =====

const teamFilter = document.getElementById("teamFilter");
const matchTable = document.getElementById("matchTable");

teamFilter.addEventListener("change", function () {
    const selectedTeam = this.value;
    const rows = matchTable.querySelectorAll("tr");

    rows.forEach(row => {
        const match = row.cells[0].textContent;

        if (selectedTeam === "all" || match.includes(selectedTeam)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});


// ===== TICKET BOOKING SYSTEM =====

const bookingForm = document.getElementById("bookingForm");
const bookingList = document.getElementById("bookingList");

let bookings = [];

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const match = document.getElementById("match").value;
    const stand = document.getElementById("stand").value;
    const quantity = Number(document.getElementById("quantity").value);

    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const total = Number(stand) * quantity;
    const bookingId = "IPL" + Date.now().toString().slice(-6);

    const booking = {
        bookingId,
        name,
        email,
        phone,
        match,
        stand,
        quantity,
        total
    };

    bookings.push(booking);

    displayBookings();

    alert("Booking successful! Your Booking ID is " + bookingId);

    bookingForm.reset();
});


// ===== DISPLAY BOOKINGS =====

function displayBookings() {
    bookingList.innerHTML = "";

    bookings.forEach(booking => {
        const card = document.createElement("div");
        card.className = "guideline-card";

        const title = document.createElement("h3");
        title.textContent = "Booking Confirmation";

        const details = document.createElement("p");
        details.textContent =
            "Booking ID: " + booking.bookingId +
            " | Name: " + booking.name +
            " | Match: " + booking.match +
            " | Stand: " + getStandName(booking.stand) +
            " | Quantity: " + booking.quantity +
            " | Total: ₹" + booking.total;

        card.append(title, details);
        bookingList.appendChild(card);
    });
}


// ===== STAND CATEGORY =====

function getStandName(price) {
    if (price === "1000") return "General";
    if (price === "1500") return "Premium";
    if (price === "3000") return "VIP";
    return "Unknown";
}

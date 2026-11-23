
/* IPL Ticket Booking - Activity 7 */

// Toast Notification
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 2500);
}

// DOM Selectors
const match = document.getElementById("match");
const category = document.getElementById("category");
const quantity = document.getElementById("quantity");

const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const ticketPrice = document.getElementById("ticketPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");

// Update Booking Summary
function updateSummary() {

    const selectedMatch = match.value;
    const selectedStand = category.options[category.selectedIndex].text;
    const price = Number(category.value) || 0;
    const tickets = Number(quantity.value) || 0;

    summaryMatch.innerText = selectedMatch || "Not Selected";

    summaryStand.innerText = category.value
        ? selectedStand
        : "Not Selected";

    ticketPrice.innerText = "₹" + price;

    summaryQuantity.innerText = tickets;

    const total = price * tickets;

    summaryTotal.innerText = "₹" + total;

    showToast("Booking Summary Updated!");
}

// Change Event Listeners
match.addEventListener("change", updateSummary);

category.addEventListener("change", updateSummary);

quantity.addEventListener("input", function() {

    if (quantity.value !== "" &&
        (Number(quantity.value) < 1 ||
         Number(quantity.value) > 10)) {
        showToast("Enter between 1 and 10 tickets");
        return;
    }

    updateSummary();
});

// Booking Form Submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    updateSummary();

    showToast("Your booking was successful!");

});

// Reset Form
document.getElementById("bookingForm").addEventListener("reset", function() {

    setTimeout(function() {

        summaryMatch.innerText = "Not Selected";
        summaryStand.innerText = "Not Selected";
        ticketPrice.innerText = "₹0";
        summaryQuantity.innerText = "1";
        summaryTotal.innerText = "₹0";

        showToast("Form Reset Successfully!");

    }, 0);

});

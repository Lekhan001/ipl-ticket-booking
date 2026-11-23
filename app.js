
/* IPL Ticket Booking - Activity 5 */

// 1. Reusable Toast Notification Function
function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}

// 2. Smooth Scrolling to Booking Form
document.querySelectorAll('a[href="#booking"]').forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        document.getElementById("booking").scrollIntoView({
            behavior: "smooth"
        });

        showToast("Redirecting to Ticket Booking!");
    });

});

// 3. Calculate Ticket Price
function calculateTotal() {

    const category = document.getElementById("category").value;
    const quantity = document.getElementById("quantity").value;

    if (!category || quantity < 1 || quantity > 10) {
        showToast("Please select a valid ticket category and quantity!");
        return;
    }

    const total = Number(category) * Number(quantity);

    document.getElementById("total").innerText =
        "Total Amount: ₹" + total;
}

// 4. Booking Form Interaction
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    showToast("Your booking was successful!");

    // Keep all entered details in the form.
});

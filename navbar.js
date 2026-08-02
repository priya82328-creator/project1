// ===============================
// Get Current User
// ===============================
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const loginLink = document.getElementById("loginLink");
const cartLink = document.getElementById("cartLink");
const logoutLink = document.getElementById("logoutLink");
const cartCount = document.getElementById("cartCount");

// ===============================
// Show / Hide Navbar Links
// ===============================
if (loginLink && cartLink && logoutLink) {

    if (currentUser) {
        loginLink.style.display = "none";
        cartLink.style.display = "inline";
        logoutLink.style.display = "inline";
    } else {
        loginLink.style.display = "inline";
        cartLink.style.display = "none";
        logoutLink.style.display = "none";
    }

}

// ===============================
// Update Cart Count
// ===============================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = 0;

cart.forEach(function (item) {
    count += item.quantity;
});

if (cartCount) {
    cartCount.textContent = count;
}

// ===============================
// Logout Popup
// ===============================
const modal = document.getElementById("logoutModal");
const confirmBtn = document.getElementById("confirmLogout");
const cancelBtn = document.getElementById("cancelLogout");

// Open Popup
if (logoutLink && modal) {

    logoutLink.addEventListener("click", function (e) {

        e.preventDefault();

        modal.style.display = "flex";

    });

}

// Cancel Logout
if (cancelBtn) {

    cancelBtn.addEventListener("click", function () {

        modal.style.display = "none";

    });

}

// Confirm Logout
if (confirmBtn) {
confirmBtn.addEventListener("click", function () {

   

    localStorage.removeItem("currentUser");
    localStorage.removeItem("loggedIn");

    window.location.href = "home.html";

});
}

// Close Popup When Clicking Outside
if (modal) {

    window.addEventListener("click", function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}
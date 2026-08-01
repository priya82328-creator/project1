
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

const toggleNewPassword = document.getElementById("toggleNewPassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

toggleNewPassword.addEventListener("click", function () {

    if (newPassword.type === "password") {

        newPassword.type = "text";
        toggleNewPassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        newPassword.type = "password";
        toggleNewPassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        toggleConfirmPassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        confirmPassword.type = "password";
        toggleConfirmPassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});

// ================================
// RESET PASSWORD
// ================================

const forgotForm = document.getElementById("forgotForm");
const message = document.getElementById("message");

forgotForm.addEventListener("submit", function(e){

    e.preventDefault();

    message.textContent = "";

    const username = document.getElementById("username").value.trim();
    const newPass = newPassword.value;
    const confirmPass = confirmPassword.value;

    if(username === ""){
        message.textContent = "Please enter your username.";
        return;
    }

    if(newPass.length < 8){
        message.textContent = "Password must be at least 8 characters.";
        return;
    }

    if(newPass !== confirmPass){
        message.textContent = "Passwords do not match.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const index = users.findIndex(function(user){
        return user.username === username;
    });

    if(index === -1){
        message.textContent = "Username not found.";
        return;
    }

    users[index].password = newPass;

    localStorage.setItem("users", JSON.stringify(users));

    alert("Password changed successfully!");

    window.location.href = "login.html";

});
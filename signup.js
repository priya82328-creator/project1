

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");

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


const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    message.textContent = "";

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("username").value.trim();
    const userPassword = password.value;

   

    if(fullname === ""){
        message.textContent = "Please enter your full name.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        message.textContent = "Please enter a valid email.";
        return;
    }

    if(!/^98\d{8}$/.test(phone)){
        message.textContent = "Enter a valid 10-digit contact number.";
        return;
    }

    if(username.length < 4){
        message.textContent = "Username must contain at least 4 characters.";
        return;
    }

    if(userPassword.length < 8){
        message.textContent = "Password must be at least 8 characters.";
        return;
    }

    if(userPassword !== confirmPassword.value){
        message.textContent = "Passwords do not match.";
        return;
    }

    

    let users = JSON.parse(localStorage.getItem("users")) || [];

   

    const exists = users.some(function(user){

        return user.username.toLowerCase() === username.toLowerCase();

    });

    if(exists){

        message.textContent = "Username already exists.";

        return;

    }

    

    users.push({

        fullname: fullname,
        email: email,
        phone: phone,
        username: username,
        password: userPassword

    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Your account has been created successfully!");

    signupForm.reset();

    window.location.href = "login.html";

});
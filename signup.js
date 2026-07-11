const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    message.textContent = "";

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(fullName === ""){
        message.textContent = "Please enter your full name.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        message.textContent = "Please enter a valid email address.";
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if(!phonePattern.test(phone)){
        message.textContent = "Contact number must be 10 digits.";
        return;
    }

    if(username.length < 4){
        message.textContent = "Username must be at least 4 characters.";
        return;
    }

    if(password.length < 8){
        message.textContent = "Password must be at least 8 characters.";
        return;
    }

    const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if(!passwordPattern.test(password)){
        message.textContent =
        "Password must contain uppercase, lowercase, number and special character.";
        return;
    }

    if(password !== confirmPassword){
        message.textContent = "Passwords do not match.";
        return;
    }

    alert("Account created successfully!");

    window.location.href = "login.html";

});
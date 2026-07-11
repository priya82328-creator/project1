const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === ""){
        alert("Please enter your username.");
        return;
    }

    if(password === ""){
        alert("Please enter your password.");
        return;
    }

    if(password.length < 8){
        alert("Password must be at least 8 characters.");
        return;
    }

    // Temporary Login
    // Replace this with Java backend later

    if(username === "admin" && password === "Admin@123"){

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }else{

        alert("Invalid Username or Password.");

    }

});
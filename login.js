console.log("login.js loaded");


const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");


// ===============================
// Show / Hide Password
// ===============================
if (togglePassword && passwordInput) {

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            passwordInput.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

}


// ===============================
// Login
// ===============================
if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();


        message.textContent = "";
        message.className = "message";


        const username = document.getElementById("username").value.trim();
        const password = passwordInput.value.trim();



        // Validation
        if (username === "") {

            message.textContent = "❌ Please enter your username.";
            message.classList.add("error");
            return;

        }


        if (password === "") {

            message.textContent = "❌ Please enter your password.";
            message.classList.add("error");
            return;

        }



        // Get users
        const users = JSON.parse(localStorage.getItem("users")) || [];



        // Find user
        const user = users.find(function(item){

            return item.username === username &&
                   item.password === password;

        });



        if(user){


            // Save session
            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );


            localStorage.setItem(
                "loggedIn",
                "true"
            );



            // Show success message
            message.textContent = "✅ Login successful!";
            message.className = "message success";



            // Redirect after 2 seconds
            setTimeout(function(){

                message.textContent = "";
                message.className = "message";

                window.location.href = "home.html";

            },2000);



        }

        else{

            message.textContent = "❌ Invalid username or password.";
            message.className = "message error";

        }


    });

}




// ===============================
// Load User Profile
// ===============================
window.addEventListener("load", function(){


    // Clear old messages
    if(message){

        message.textContent = "";
        message.className = "message";

    }



    const user = JSON.parse(localStorage.getItem("currentUser"));



    if(user && document.getElementById("profileBox")){


        document.querySelector(".login-box").style.display = "none";


        document.getElementById("profileBox").style.display = "block";



        document.getElementById("profileName").textContent =
        user.fullname || user.username;



        document.getElementById("profileEmail").textContent =
        user.email || "Not Available";



        document.getElementById("profileContact").textContent =
        user.phone || "Not Available";


    }


});
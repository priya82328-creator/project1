

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");


togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    }

});






const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function (e) {

    e.preventDefault();


    const username = document.getElementById("username").value.trim();

    const password = passwordInput.value.trim();



    if (username === "") {

        alert("Please enter your username.");
        return;

    }


    if (password === "") {

        alert("Please enter your password.");
        return;

    }




   

    let users = JSON.parse(localStorage.getItem("users")) || [];



   

    const user = users.find(function(item){

        return item.username === username &&
               item.password === password;

    });



    if(user){


      

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );


        localStorage.setItem(
            "loggedIn",
            "true"
        );



        alert("Login Successful!");

        window.location.href = "home.html";


    }

    else{


        alert("Invalid Username or Password.");

    }



});







window.onload = function(){


    let user = JSON.parse(
        localStorage.getItem("currentUser")
    );


    if(user && document.getElementById("profileBox")){


        document.querySelector(".login-box").style.display="none";


        document.getElementById("profileBox").style.display="block";



        document.getElementById("profileName").innerHTML =
        user.username;



        document.getElementById("profileEmail").innerHTML =
        user.email || "Not Available";



        document.getElementById("profileContact").innerHTML =
        user.contact || "Not Available";


    }


};






function logout(){


    localStorage.removeItem("currentUser");

    localStorage.removeItem("loggedIn");

    document.getElementById("profileBox").style.display="none";

    document.querySelector(".login-box").style.display="block";


}


window.onload = function(){

    let user = JSON.parse(localStorage.getItem("currentUser"));


    if(user && document.getElementById("profileBox")){


        document.querySelector(".login-box").style.display = "none";


        document.getElementById("profileBox").style.display = "block";


        document.getElementById("profileName").innerHTML =
        user.username;


        document.getElementById("profileEmail").innerHTML =
        user.email || "Not Available";


        document.getElementById("profileContact").innerHTML =
        user.contact || "Not Available";


    }

};





function logout(){

    localStorage.removeItem("currentUser");

    localStorage.removeItem("loggedIn");


    document.getElementById("profileBox").style.display="none";


    document.querySelector(".login-box").style.display="block";

}
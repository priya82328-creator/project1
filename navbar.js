

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const loginLink = document.getElementById("loginLink");
const cartLink = document.getElementById("cartLink");
const logoutLink = document.getElementById("logoutLink");

if(currentUser){

    loginLink.style.display = "none";

    cartLink.style.display = "inline";

    logoutLink.style.display = "inline";

}else{

    loginLink.style.display = "inline";

    cartLink.style.display = "none";

    logoutLink.style.display = "none";

}



let cart = JSON.parse(localStorage.getItem("cart")) || [];

let count = 0;

cart.forEach(function(item){

    count += item.quantity;

});

document.getElementById("cartCount").innerHTML = count;


// Logout

logoutLink.addEventListener("click",function(){

    if(confirm("Are you sure you want to logout?")){

        localStorage.removeItem("currentUser");

        window.location.href="login.html";

    }

});
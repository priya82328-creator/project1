function addToCart(name, price){

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){

        alert("Please login first.");

        window.location.href="login.html";

        return;

    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(function(item){

        return item.name === name;

    });

    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            name:name,
            price:price,
            quantity:1

        });

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    alert(name + " added to cart successfully!");

    location.reload();

}
let cart = JSON.parse(localStorage.getItem("cart")) || [];


let cartItems = document.getElementById("cartItems");
let totalPrice = document.getElementById("totalPrice");
let cartCount = document.getElementById("cartCount");


let total = 0;



if(cart.length === 0){

    cartItems.innerHTML = 
    `
    <p>
        Your cart is empty.
    </p>
    `;

}

else{


    cartItems.innerHTML = "";


    cart.forEach((item,index)=>{


        cartItems.innerHTML +=

        `
        <div class="cart-item">

            <h3>${item.name}</h3>

            <p>
                Price: Rs. ${item.price}
            </p>


            <button onclick="removeItem(${index})">
                Remove
            </button>


        </div>

        `;


        total += Number(item.price);


    });


}



if(totalPrice){
    totalPrice.innerHTML = total;
}



if(cartCount){
    cartCount.innerHTML = cart.length;
}




function removeItem(index){


    cart.splice(index,1);


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    location.reload();

}
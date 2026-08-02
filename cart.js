console.log("cart.js loaded");


// ===============================
// Get Cart Data
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartCount = document.getElementById("cartCount");


let total = 0;



// ===============================
// Display Cart Items
// ===============================

function displayCart(){

    total = 0;


    if(cartItems){


        if(cart.length === 0){


            cartItems.innerHTML = `

                <p>
                    Your cart is empty.
                </p>

            `;


        }

        else{


            cartItems.innerHTML = "";


            cart.forEach((item,index)=>{


                cartItems.innerHTML += `

                <div class="cart-item">

                    <h3>
                        ${item.name}
                    </h3>


                    <p>
                        Price: Rs. ${item.price}
                    </p>


                    <p>
                        Quantity: ${item.quantity || 1}
                    </p>


                    <button onclick="removeItem(${index})">

                        Remove

                    </button>


                </div>


                `;


                total += Number(item.price) * Number(item.quantity || 1);


            });


        }


    }



    // Update Total Price

    if(totalPrice){

        totalPrice.innerHTML = total;

    }


    // Update Cart Count

    if(cartCount){

        cartCount.innerHTML = cart.length;

    }


}

// ===============================
// Remove Item From Cart
// ===============================

function removeItem(index){


    cart.splice(index,1);



    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );



    displayCart();


}

// ===============================
// Load Cart When Page Opens
// ===============================

displayCart();

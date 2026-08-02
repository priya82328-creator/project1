let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const customerAddress = document.getElementById("customerAddress");

const checkoutItems = document.getElementById("checkoutItems");
const totalAmount = document.getElementById("totalAmount");


if(currentUser){

    customerName.innerText = currentUser.name || "N/A";
    customerPhone.innerText = currentUser.phone || "N/A";
    customerAddress.innerText = currentUser.address || "N/A";

}else{

    customerName.innerText = "Guest";
    customerPhone.innerText = "N/A";
    customerAddress.innerText = "N/A";

}


let total = 0;


cart.forEach(item=>{

    let quantity = item.quantity || 1;
    let price = Number(item.price) * quantity;

    total += price;

    checkoutItems.innerHTML += `

    <div class="order-item">

        <span>
            ${item.name} x ${quantity}
        </span>

        <span>
            Rs. ${price}
        </span>

    </div>

    `;

});


totalAmount.innerText = total;


let order = {

    customer: currentUser,
    items: cart,
    total: total,
    date: new Date().toLocaleString()

};


localStorage.setItem("order",JSON.stringify(order));

localStorage.removeItem("cart");
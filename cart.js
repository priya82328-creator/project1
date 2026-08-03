console.log("cart.js loaded");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const cartItems=document.getElementById("cartItems");
const totalPrice=document.getElementById("totalPrice");
const cartCount=document.getElementById("cartCount");

function displayCart(){

let total=0;

const emptyCart=document.getElementById("emptyCart");
const orderBtn=document.querySelector(".order-btn");
const totalSection=document.querySelector(".total");

if(cart.length===0){

cartItems.style.display="none";
emptyCart.style.display="flex";
orderBtn.style.display="none";
totalSection.style.display="none";

if(cartCount){
cartCount.innerText="0";
}

return;

}

cartItems.style.display="block";
emptyCart.style.display="none";
orderBtn.style.display="inline-block";
totalSection.style.display="block";

cartItems.innerHTML="";

cart.forEach((item,index)=>{

let quantity=item.quantity||1;
let price=Number(item.price)*quantity;

total+=price;

cartItems.innerHTML+=`

<div class="cart-item">

<h3>${item.name}</h3>

<p><strong>Price:</strong> Rs. ${item.price}</p>

<p><strong>Quantity:</strong> ${quantity}</p>

<p><strong>Subtotal:</strong> Rs. ${price}</p>

<button class="remove-btn" onclick="removeItem(${index})">
🗑 Remove
</button>

</div>

`;

});

totalPrice.innerText=total;

if(cartCount){
cartCount.innerText=cart.length;
}

}

function removeItem(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}else{

cart.splice(index,1);

}

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function goCheckout(){

if(cart.length===0){

alert("Your cart is empty.");

return;

}

window.location.href="checkout.html";

}

displayCart();
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");
const togglePassword=document.getElementById("togglePassword");
const toggleConfirmPassword=document.getElementById("toggleConfirmPassword");
const signupForm=document.getElementById("signupForm");
const message=document.getElementById("message");

togglePassword.addEventListener("click",function(){
if(password.type==="password"){
password.type="text";
togglePassword.classList.replace("fa-eye","fa-eye-slash");
}else{
password.type="password";
togglePassword.classList.replace("fa-eye-slash","fa-eye");
}
});

toggleConfirmPassword.addEventListener("click",function(){
if(confirmPassword.type==="password"){
confirmPassword.type="text";
toggleConfirmPassword.classList.replace("fa-eye","fa-eye-slash");
}else{
confirmPassword.type="password";
toggleConfirmPassword.classList.replace("fa-eye-slash","fa-eye");
}
});

signupForm.addEventListener("submit",function(e){

e.preventDefault();

message.textContent="";
message.className="message";

const fullname=document.getElementById("fullname").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const address=document.getElementById("address").value.trim();
const username=document.getElementById("username").value.trim();
const userPassword=password.value;

if(fullname===""){
message.textContent="Please enter your full name.";
message.classList.add("error");
return;
}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
message.textContent="Please enter a valid email.";
message.classList.add("error");
return;
}

if(!/^98\d{8}$/.test(phone)){
message.textContent="Enter a valid 10-digit contact number.";
message.classList.add("error");
return;
}

if(address===""){
message.textContent="Please enter your address.";
message.classList.add("error");
return;
}

if(username.length<4){
message.textContent="Username must contain at least 4 characters.";
message.classList.add("error");
return;
}

if(userPassword.length<8){
message.textContent="Password must be at least 8 characters.";
message.classList.add("error");
return;
}

if(userPassword!==confirmPassword.value){
message.textContent="Passwords do not match.";
message.classList.add("error");
return;
}

let users=JSON.parse(localStorage.getItem("users"))||[];

const exists=users.some(function(user){
return user.username.toLowerCase()===username.toLowerCase();
});

if(exists){
message.textContent="Username already exists.";
message.classList.add("error");
return;
}

users.push({
fullname:fullname,
email:email,
phone:phone,
address:address,
username:username,
password:userPassword
});

localStorage.setItem("users",JSON.stringify(users));

message.textContent="✅ Your account has been successfully created!";
message.classList.add("success");

signupForm.reset();

setTimeout(function(){
window.location.href="login.html";
},2000);

});
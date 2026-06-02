console.log('js connected')

document.getElementById("login-btn").addEventListener("click", function(){
    console.log("btn clicked");

// 1 get the mobile number 
const numberInput = document.getElementById("input-num");
const contactNumber = numberInput.value;
console.log(contactNumber)

// get the 4 digit pin
const pinInput = document.getElementById("input-pin");
const pinCode = pinInput.value;
console.log(pinCode)

// match the pin and mobile number
if(contactNumber=="01737916060" && pinCode=="1234") {
    // true - home page
    // alert("Login Success")

    window.location.replace("./home.html")
}
else {
    // false - login failed
    // alert("Login Failed")
}

})
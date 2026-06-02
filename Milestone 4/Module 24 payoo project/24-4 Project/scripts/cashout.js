document.getElementById("cashout-btn").addEventListener("click", function () {
    // 1. get the agent number and validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length !="11") {
        alert ("Invalid Number");
        return;
    }

    // 2. cashout amount
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3. current balance
    const currentBalance = getBalance();

    // 4. calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert ("Insuficient Balance");
        return;
    }
    console.log(newBalance)

    // 5. pin validation
    const pin = getValueFromInput("cashout-pin");
    if(pin==="1234") {
        alert("Cashout succesful");
        setBalance(newBalance);
    }
    else {
        alert("Invalid pin");
        return;
    }

})




// ******** previous style script ********

// document.getElementById("cashout-btn").addEventListener('click', function(){
//     // get the agent number & validation
//     const cashoutNumberInput = document.getElementById("cashout-number");

//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11) {
//         alert("Invalid Number!");
//         return;
//     }


//     // get the amount & validate & convert to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");

//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);


//     // current balance
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance)


//     // calculate new balance > set new balance
//     const newBalance = Number(balance) - Number(cashoutAmount);

//     if (newBalance < 0) {
//         alert ("Insuficient Balance");
//         return;
//     }
//     console.log(newBalance);
//     balanceElement.innerText = newBalance;

//     // get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin");
//     const pin = cashoutPinInput.value;

//     if (pin === '1234') {
//     // true, alert success
//         alert("Cashout Successful")
//     }
//     else{
//     // false, alert error
//         alert("Wrong Pin")
//     }

// });
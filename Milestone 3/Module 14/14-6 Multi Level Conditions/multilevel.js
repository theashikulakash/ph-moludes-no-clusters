var inputNumber = 1200;

if(inputNumber <= 1000){
    var discount = inputNumber * 0.1;
    var payamount = inputNumber - discount;
    console.log("Pay amount: ", payamount);
}else if(inputNumber <= 2000){
    var discount = inputNumber * 0.2;
    var payamount = inputNumber - discount;
    console.log("Pay amount: ", payamount);
}else if(inputNumber <= 3000){
        var discount = inputNumber * 0.3;
    var payamount = inputNumber - discount;
    console.log("Pay amount: ", payamount);
}else if(inputNumber <= 4000){
    var discount = inputNumber * 0.4;
    var payamount = inputNumber - discount;
    console.log("Pay amount: ", payamount);
}else{
    var discount = inputNumber * 0.5;
    var payamount = inputNumber - discount;
    console.log("Pay amount: ", payamount);
}
height = 160;
weight = 48;

BMI = (weight / (height * height)) * 10000;
console.log(BMI);

if(BMI < 18.5){
    console.log("Underweight");
}else if (BMI >= 18.5 && BMI <=24.9){
    console.log("Normal");
}
else if(BMI >= 25 && BMI <=29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}

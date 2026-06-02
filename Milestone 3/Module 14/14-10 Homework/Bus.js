let age = 35;
let student = true;
fare = 800;

if (age < 10){
    fare = 800 * 0;
    console.log("Children fare: ", fare);
}
else if (age >= 10 && age < 60 && student === true){
    fare = 800 * 0.5;
    console.log("Students fare: ", fare)
}
else if (age >= 60 && student === false || student === true){
    fare = 800 * 0.85;
    console.log("Adult fare: ", fare)
}
else{
    fare = 800 * 1;
    console.log("Regular fare: ", fare)
}

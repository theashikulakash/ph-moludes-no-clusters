const price = "1000";
const manufacturer = "Samsung";
const manufacturer2 = "Apple";

if (price == 1000 && price < 2000 && manufacturer === "Samsung") {
    console.log("You get a discount!");
} else if (price < 1000 || manufacturer2 === "samsung") {
    console.log("You get a apple discount!");
} else if (price > 1000 && price < 2000 && manufacturer === "Samsung") {
    console.log("You get a samsung discount!");
} else {
    console.log("No discount");
}
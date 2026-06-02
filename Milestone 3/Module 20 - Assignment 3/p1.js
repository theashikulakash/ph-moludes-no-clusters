function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== 'number' || typeof discount !== 'number') // challenge part 1
         {
        return "Invalid";
    }

    if (discount < 0 || discount > 100) // challenge part 2
        {
        return "Invalid";
    }
    const discountAmount = (currentPrice * discount) / 100;
    const finalPrice = currentPrice - discountAmount;
    return finalPrice.toFixed(3); // output - 3 digits after dot.
}

// console.log(newPrice(1200, 7));
// console.log(newPrice("1000", 10));
// console.log(newPrice(2000, 17.17));
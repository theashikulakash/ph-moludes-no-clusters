const numbers = [1, 2, 3, 4, 5];

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const friends = ['akash', 'batash', 'chetash'];

const fisrtLetters = friends.map(frnd => frnd.charAt(0).toUpperCase() + frnd.slice(1));
console.log(fisrtLetters)


// const capitalizedFriends = friends.map(frnd => {
//   return frnd.charAt(0).toUpperCase() + frnd.slice(1);
// });

// console.log(capitalizedFriends);
// // Output: ["Akash", "Batash", "Chetash"]



const products = [
    {name: 'laptop', price: '4500'},
    {name: 'mobile', price: '6700'},
    {name: 'tv', price: '4390'}
]

const prices = products.map(pd => pd.price);
console.log(prices)

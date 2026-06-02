// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers)

// const friends = ['navid', 'javed', 'biabed', 'askas', 'ranu'];

// // const fiveCharName = friends.filter(name => name.charAt(0) === 'r');

// // const fiveCharName = friends.filter(name => name.length > 4);

// // console.log(fiveCharName)

// // if (fiveCharName.length > 4){
// // const newName = fiveCharName[0].charAt(0).toUpperCase() + fiveCharName[0].slice(1);

// // console.log(newName)

// // }


// const result = friends.filter(name => name.length <= 4 || name == 'askas').map(name => name[0].toUpperCase() + name.slice(1))

// console.log(result)


// const students = [
//     { name: 'akash', age: 29 },
//     { name: 'pakash', age: 26 },
//     { name: 'jhakash', age: 17 },
//     { name: 'makkash', age: 15 },
//     { name: 'askash', age: 12 },
//     { name: 'rakash', age: 22 },
//     { name: 'kekash', age: 27 }
// ]

// const resultstd = students
// .filter(std => std.length < 5 || std.age > 22)
// .map(std => {
//     return {
//         name: std.name[0].toUpperCase() + std.name.slice(1),
//         age: std.age
//     }
// }
// )

// console.log(resultstd)

// reduce

const numbers = [1, 2, 3, 4, 5]
let sum = 0;

// for ( const num of numbers ) {
//     sum = sum + num;
// }

// const total = numbers.reduce((acc, num) => acc + num, acc value)
const total = numbers.reduce((acc, num) => acc + num, 5)
console.log(total)
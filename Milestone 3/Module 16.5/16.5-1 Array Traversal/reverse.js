const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.reverse();
// console.log(numbers);

// const rev_num = [];
// for(const num of numbers){
//     console.log(num);
//     rev_num.unshift(num);
// }
// console.log(rev_num);
// console.log(numbers);

let rev_rev_num = [];
for(let i = numbers.length - 1; i >= 0; i--){
    const rev_num = numbers[i];
    rev_rev_num.push(rev_num);
}
console.log(rev_rev_num);
let nums = [1,2,3,4,5,6,7,8,9];
let sumOdds = 0;
let count = 0;

for (let n of nums){
    if (n % 2 !== 0){
        sumOdds += n;
        count++;
    }
}

let avg = sumOdds / count;

console.log(sumOdds);
console.log(avg);
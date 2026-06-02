function firstSum( arr1, arr2) {
    arr1[0] = 100;
    arr2[0] = 120;
    const first = arr1[0];
    const second = arr2[0];

    return first + second;
}

const num1 = [1, 2, 3];
const num2 = [10, 20, 30];

console.log('before the function call: ', num1, num2);

const result = firstSum(num1, num2); 

console.log('after the function call: ', num1, num2);
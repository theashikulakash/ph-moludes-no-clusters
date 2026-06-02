const xyz = 'hello i am learning web dev';

const words = xyz.split(' ');
const revs = [];

for (let j = 0; j < words.length; j++){
    revs.unshift(words[j]);
}

const news = revs.join(' ');
console.log(news);



// for(const letter of xyz){
//     console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);
//reverse string

// let rev = xyz.split('').reverse().join('');

// console.log(rev);

// const water = {
//     brand: 'Sakura',
//     price: 20,
//     type: 'alkaline',
//     origin: 'Japan',

// }

// console.log(water);

 // primitives
 // non-primitives
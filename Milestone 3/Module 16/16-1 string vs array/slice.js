const address = 'andorkilla';
const part = address.slice(2, 5);

console.log(part);

const akash = 'i am a good dev';


console.log(akash.split()); //split() use to split string into a whole 1 index (index-0) array
console.log(akash.split('')); //split('') use to split string into array character wise
console.log(akash.split(' ')); //split(' ') use to split string into array word wise


const friends = 'akash,batash,chatash,patash';
console.log(friends);
console.log(friends.split(',')); //split(',') use to split string into array word wise

const gang = ['akash','batash','chatash','patash'];
console.log(gang.join(', ')); //join() use to join array into string

const first = 'akash';
const last = 'patash';
const fullName = first + ' ' + last; //concatenation
console.log(fullName);

fulname2 = `${first} ${last}`; //template literal
console.log(fulname2);

fulname3 = first.concat(' ', last); //concat() use to join string
console.log(fulname3);

// includes
console.log(last.includes('a'))
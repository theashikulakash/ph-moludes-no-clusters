const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'web dev',
    salary: 250000,
    married: true,
    'favorite color': 'black',
    'favorite places': ['dhaka', 'chittagong', 'khulna'],
}

console.log(person);

console.log(person.married);

// dot notation
const income = person.salary;
console.log(income);

// bracket notation
const boyos = person['age'];
console.log(boyos);

// bracket notation 'with space in property name'
const places = person['favorite places'];
console.log(places);

// dot notation 'change property value'
person.age = 28;
console.log(person);

const person = {
    name: 'akash',
    age: 23,
    friends: ['batsh', 'askas', 'catash'],
    salary: 23000,
}

console.log(person, typeof person)

const personJSON = JSON.stringify(person)

console.log(personJSON, typeof personJSON)

const parseJSON = JSON.parse(personJSON)
 
console.log(parseJSON, typeof parseJSON)


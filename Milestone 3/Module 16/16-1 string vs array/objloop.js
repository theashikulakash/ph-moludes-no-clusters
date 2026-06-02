const mobile = {
    name: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    storage: '64gb',
    processor: {
        name: 'snapdragon',
        generation: 8,
    },
    ram: '8gb',
    isNew: true,
}

// dot notation property add
mobile['warranty date'] = '1 year';

console.log(Object.keys(mobile).length);

// for of : works in array, not work on object
// for in : work on object, not work in array
// for(const prop in mobile) {
//     console.log(prop); // property name
//     console.log(mobile[prop]); // property value
// }
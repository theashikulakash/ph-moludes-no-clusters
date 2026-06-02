const computer = {
    name: 'macbook',
    price: 800000,
    color: 'black',
    storage: '512gb',
    processor: 'i7',
    ram: '8gb',
    unique: {
        keyboard: 'backlit',
        mouse: 'gaming',
        touchpad: {
            type: 'multi-touch',
            size: 'large',
        }
    }
}

// console.log(Object.keys(computer).join(', '));
// console.log(Object.values(computer));
// console.log(Object.entries(computer));

console.log(computer.unique);
console.log(computer.unique.keyboard);
console.log(computer['unique']['mouse']);
console.log(computer.unique.touchpad.type);
console.log(computer['unique']['touchpad']['size']);
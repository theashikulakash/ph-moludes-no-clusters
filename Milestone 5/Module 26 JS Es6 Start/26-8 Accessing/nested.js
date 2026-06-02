// const employee = {
//     name: 'Jhon',
//     // 1: 'Desk No',
//     'home-address': '123-ABC Road',
//     designation: 'Office Executive'
// };

// console.log(employee.name)
// console.log(employee['name']);

// // console.log(employee.'home-address'); // not work
// console.log(employee['home-address']);

// const address = employee['home-address'];
// console.log(address)


// const key = 'designation'
// console.log(employee[key]) // employee key = 'designation'


const employee = {
    name: 'Jhon',
    'home-address': '123-ABC Road',
    family: {
        father: 'Golam',
        // mother: {
        //     // mname: 'Ayesha',
        //     age: 56
        // }
    },
    designation: 'Office Executive'
};

const value = employee.name;
console.log(employee.family.mother?.mname)
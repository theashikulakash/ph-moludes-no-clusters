const employee = {
    name: 'Jhon',
    'home-address': '123-ABC Road',
    salary: 23000,
    id: 2,
    type: 'office',
    designation: 'Office Executive'
    // family: {
    //     father: 'Golam',
    //     // mother: {
    //     //     // mname: 'Ayesha',
    //     //     age: 56
    //     // }
    // },
};

for (const key in employee) {
    const value = employee[key]
    console.log(key, value)
}
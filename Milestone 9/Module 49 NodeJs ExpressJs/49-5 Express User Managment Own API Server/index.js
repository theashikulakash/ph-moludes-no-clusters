const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 1996;


// middleware allow control acess origin

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Akash', email: 'akash@gmail.com'},
    {id: 2, name: 'Bkash', email: 'bkash@gmail.com'},
    {id: 3, name: 'Ckash', email: 'ckash@gmail.com'}
];

app.get('/', (req, res) =>{
    res.send('Hello from user world!');
})

app.get('/users', (req, res) =>{
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('data in the request:', req.body);

    // to add new user data in the database of local data
    const newUser = req.body;
    newUser.id = users.length.id + 1;
    users.push(newUser);
    res.send({success: true, data: newUser, message: 'User added successful'});
})

app.get('/contact', (req, res) =>{
    res.send('Users contact!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})





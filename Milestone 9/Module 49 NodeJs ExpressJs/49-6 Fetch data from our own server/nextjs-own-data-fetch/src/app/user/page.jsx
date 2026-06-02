import React from 'react';



const UserPage = async () => {

    const res = await fetch('http://localhost:1996/users');
    // return res.json();
    const users = await res.json();


    console.log(users);

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {
                    users.map(user => 
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <h4>{user.email}</h4>
                    </div>

                    )}
            </div>
            <div>
                {
                    users.map(user => <div key={user.id}><a href="/">{user.email}</a></div>)
                }
            </div>
        </div>
    );
};

export default UserPage;
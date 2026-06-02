import React, { use } from 'react';

const UsersList = ( {usersPromise} ) => {
    const users = use(usersPromise);
    return (
        <div>
            <h2>Users inside users list, {users.length}</h2>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UsersList;
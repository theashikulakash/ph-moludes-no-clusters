// 'use client'
import React from 'react';
import UsersList from '../components/userslist';
import { Suspense } from 'react';

const Page = () => {

    const getUsers = async () => {
        const res = await fetch('http://localhost:1996/users');
        return res.json();
    }

    const usersPromise = getUsers();


    return (
        <div>
            <div>
                <h2>Users2: Data</h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <UsersList usersPromise={usersPromise} />

                </Suspense>

            </div>
        </div>
    );
};

export default Page;
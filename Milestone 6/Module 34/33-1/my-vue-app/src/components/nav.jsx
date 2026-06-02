import { Link, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navigationData = [
    { id: 1, name: "Home", path: "https://tailwindcss.com/docs/installation/using-vite" },
    { id: 2, name: "All Countries", path: "https://claude.ai/login" },
    { id: 3, name: "Favorites", path: "/favorites" },
    { id: 4, name: "About Us", path: "/about" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Nav = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <li key={route.id} className='mr-10'><a href={route.path}>{route.name}</a></li>)

    return (
        <nav className='flex gap-20 text-orange-400'>
            <span className='flex' onClick={() =>setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden bg-amber-200 absolute duration-1000 ${open ? 'top-8' : '-top-64'}`}>
                    {links}
                </ul>
                
                <h3>DaisyUI</h3>
            </span>

            <ul className='flex gap-5 list-none md:flex hidden'>
                {
                    links
                }
            </ul>


        </nav>

    );
};

export default Nav;



"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
    const pathName = usePathname();

    const links = <>
        <li><Link className={pathName === '/' ? 'text-green-600 font-bold' : ''} href='/'>Home</Link></li>
        <li><Link className={pathName === '/about' ? 'text-orange-600 font-bold' : ''} href='/about'>About</Link></li>
        <li><Link className={pathName === '/contact' ? 'text-blue-600 font-bold' : ''} href='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 border-none">Button</a>
            </div>
        </div>
    );
};

export default Nav;

import React from 'react';
import { format } from "date-fns";
import logo from "@/assets/logo.png"
import Image from 'next/image';

const Header = () => {
    return (
        <div className="text-center py-8">
            <Image 
            src={logo}
            width={300}
            height={200}
            alt='logo'
            className="mx-auto"
            />
            <p className='text-green-400'>Journalism without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
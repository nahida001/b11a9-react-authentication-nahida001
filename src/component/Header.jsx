import React from 'react';
import headers from '../assets/header.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
           <img className='w-[300px]' src={headers} alt="" /> 
           <p className='text-lg font-semibold text-amber-500 mb-3'>{format(new Date(),"EEEE,MM MMMM,yyyy ")}</p>
        </div>
    );
};

export default Header;

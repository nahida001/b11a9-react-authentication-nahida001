import React from 'react';
import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
const HZoon = () => {
    return (
        <div className='bg-base-200 p-5 space-y-3'>
           <h1 className='font-bold'>Hzone</h1>
           <div className='mb-3 space-y-2'>
             <img src={w1} alt="" />
             <img src={w2} alt="" />
           </div>
        </div>
    );
};

export default HZoon;
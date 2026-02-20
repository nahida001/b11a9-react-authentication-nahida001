import React from 'react';
import e from '../assets/e.jpg'
import e1 from '../assets/e2.jpg'
import e3 from '../assets/e3.jpg'
const EZoon = () => {
    return (
        <div className='bg-base-200 p-5 space-y-3'>
                  <h1 className='font-bold'>EventZoon</h1>
                  <div className='mb-3 space-y-2'>
                    <img src={e} alt="" className='w-[300px] h-[200px]'/>
                    <img src={e1} alt="" className='w-[300px] h-[200px]'/>
                     <img src={e3} alt="" className='w-[300px] h-[200px]'/>
                  </div>
               </div>
    );
};

export default EZoon;
import React from 'react';
import Marquee from "react-fast-marquee";
const Update = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3 mb-5'>
            <p className='bg-secondary p-2'>Update</p>
            <Marquee>I can be a React component, multiple React components, or just some text.</Marquee>
             <Marquee>I can be a React component, multiple React components, or just some text.</Marquee>
             <Marquee>I can be a React component, multiple React components, or just some text.</Marquee>
        
        </div>
    );
};

export default Update;
import React, { use } from 'react';
import { NavLink } from 'react-router';

const categorisPromise=fetch('/public/Categories.json').then((res)=>res.json())

const Categorise = () => {
    const categorise=use(categorisPromise)
    return (
        <div>
            <h1>All Categorise({categorise.length})</h1>
           <div className='grid grid-cols-1 mt-5 gap-2 border-0 mb-3'>
             
             {
             categorise.map((category)=>( <NavLink key={category.id} to={`/category/${category.id}`} className='btn bg-base-100 hover:bg-base-200'>{category.name}</NavLink>))
            }
           </div>
        </div>
    );
};

export default Categorise;
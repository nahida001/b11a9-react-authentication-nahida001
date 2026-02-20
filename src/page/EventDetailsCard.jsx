import React from 'react';
import { Link } from 'react-router';

const EventDetailsCard = ({event}) => {
    return (
        <div className='space-y-2'>
            <img src={event.thumbnail} alt="" className='w-[900px] h-[400px]' />
            <h1 className='font-semibold text-xl'>{event.name}</h1>
            <p className='pr-10'>{event.description}</p>
            <Link className='btn btn-secondary' to={`/category/${event.category_id}`}>All this Event this Category</Link>
        </div>
    );
};

export default EventDetailsCard;
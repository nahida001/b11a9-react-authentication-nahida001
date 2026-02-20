import React from 'react';
import Categorycon from '../page/Categorycon';
import { Link } from 'react-router';
const Campcard = ({camp}) => {
    const {
      id,
    name,
    thumbnail,
    date,
    location,
    entry_fee,
    description
  } = camp;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure>
        <img
          src={thumbnail}
          alt={name}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p className="text-sm text-gray-500">📅 {date}</p>
        <p className="text-sm text-gray-500">📍 {location}</p>

        <p className="mt-2 text-sm">{description}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="badge badge-primary">
             {entry_fee} BDT
          </span>

          <Link to={`/eventDetails/${id}`} className="btn btn-sm btn-outline bg-secondary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campcard;
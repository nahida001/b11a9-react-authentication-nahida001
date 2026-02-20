import React from 'react';
import { Link, NavLink } from 'react-router';
import users from '../assets/user.png'
const Navbar = () => {
  const nav = ({ isActive }) =>
  `px-2 py-1 rounded-lg transition
   ${isActive 
     ? "bg-accent text-white shadow-md" 
     : "bg-accent/20 text-accent hover:bg-accent/30"}`;

    return (
       <div className="flex items-center px-8 relative">

  
  <div className="nav flex gap-2 text-accent mx-auto">
    <NavLink to="/" className={nav}>Home</NavLink>
    <NavLink to="/about" className={nav}>About</NavLink>
    <NavLink to="/conference" className={nav}>Conference</NavLink>
  </div>

  
  <div className="flex gap-3 absolute right-8">
    <img src={users} alt="" />
    <Link className="btn btn-primary "  to={`/Auth/Login`}>Login</Link>
  </div>

</div>
    );
};

export default Navbar;
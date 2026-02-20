import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import users from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  const {user,logOut}=use(AuthContext)
    const handleLogOut=()=>{
        console.log("user trying to logout");
        logOut().then(() => {
         alert("You LogOut Successfully")
}    ).catch((error) => {
       console.log(error);
});

    }
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
      <img className='w-12 rounded-full' src={`${user ? user.photoURL : users}`} alt="" />
                {user ? (<button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>) : (<Link to={`/Auth/Login`} className='btn btn-primary'>Login</Link>)}
                </div>

</div>
    );
};

export default Navbar;
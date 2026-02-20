import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const {createUser,setuser,updateUser}= use(AuthContext)
  const [nameError,SetnameError]=useState("")
  
  const navigates=useNavigate();
  const handleRegister=(e)=>{
     e.preventDefault()
     console.log(e.target);
     const name=e.target.name.value;
     if(name.length<5){
      SetnameError('Name Should be more then 5 character')
      return
     }else{
       SetnameError("");
     }
     const photourl=e.target.photourl.value;
     const email=e.target.email.value;
     const password=e.target.password.value;
     console.log(name,photourl,email,password);
      createUser(email,password).then((result) => {
    // Signed up 
    const user = result.user;
    updateUser({displayName:name,photoURL:photourl})
    .then(() => { 
      setuser({...user,displayName:name,photoURL:photourl})
      navigates("/")
    })
    .catch((error) => {
      console.log(error);
    setuser(user)
    })
  
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  }
    return (
        <div>
             <div className=" flex justify-center items-center py-30">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
             <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Enter your name" />
           <label className="label">Photo URL</label>
          <input name="photourl" type="text" className="input" placeholder="Enter your PhotoURL" />
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required/>
          
          <div className='mt-2'>
           <input type="checkbox" defaultChecked className="checkbox checkbox-sm mr-2" />
            <a className="link link-hover">Accept Term & Conditions</a>
            </div>
          <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
           <p className='pt-5 text-sm text-center font-semibold'>Allready Have An Account ? <Link to="/auth/login" className='text-secondary'>Login </Link></p>
       
          </fieldset>
      </form>
    </div>
  </div>

        </div>
    );
};

export default Register;
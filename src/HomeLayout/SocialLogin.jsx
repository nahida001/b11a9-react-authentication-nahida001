import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from '../Provider/AuthProvider';
const SocialLogin = () => {
   const {signGoogle}=use(AuthContext)
     const [user,setUser]=useState(null);
    //event hangler
    const handleSignInGoogle=()=>{
       signGoogle().then((result)=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch((error)=>{
           console.log(error);
        })
    }
     const handleSignOut=()=>{
            signOut().then(() => {
          // Sign-out successful.
          setUser(null)
         }).catch((error) => {
          // An error happened.
           console.log(error);

       });
        }

    return (
        <div>
             <div className='font-bold mb-5'>Login with</div>
            <div className='space-y-3'>
                 {
                user ? <button onClick={handleSignOut} className='btn btn-outline btn-secondary w-full'><FcGoogle size={25}/>SignOut</button>:<button onClick={handleSignInGoogle} className='btn btn-outline btn-secondary w-full'><FcGoogle size={25}/>Login with Google</button> 
            }
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} />
                </div>
            }
                <button className='btn btn-outline btn-primary w-full'><FaGithub size={25}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
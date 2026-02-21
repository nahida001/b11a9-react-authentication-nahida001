import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firbase/firebase.init'


export const AuthContext=createContext();
    const auth=getAuth(app)
 const provider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null);
    
     const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
         setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
    }
    const signGoogle = () => {
    return signInWithPopup(auth, provider);
}
    const singIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser)
      setLoading(false)
       })
       return ()=>{
        unsubscribe();
       }
    },[])
    const authData={
        user,
        setuser,
        createUser,
        logOut,
        singIn,
        loading,
        setLoading,
        updateUser,
        signGoogle
    }
    return  <AuthContext value={authData}>{children}</AuthContext>
};


export default AuthProvider;
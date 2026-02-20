import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const AuthLayOut = () => {
    return (
        <div className='bg-base-100 min-h-screen'>
           <header className='w-11/12 mx-auto py-4'>
              <Header></Header> 
           </header>
           <main className='w-11/12 mx-auto py-4'>
            <Outlet></Outlet>
           </main>
           <footer className='w-11/12 mx-auto py-4'>
            <Footer></Footer>
           </footer>
         
        </div>
    );
};

export default AuthLayOut;
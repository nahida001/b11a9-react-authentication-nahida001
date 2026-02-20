import React from 'react';
import Navbar from '../component/Navbar';
import Casual from '../HomeLayout/casual';
import Footer from '../component/Footer'
import Header from '../component/Header';
import Update from '../HomeLayout/Update';
import LeftSide from '../HomeLayout/LeftSide';
import { Outlet } from 'react-router';
import RightSide from '../HomeLayout/RightSide';
const HomeLayOut = () => {
    return (
        <div >
             <header className='w-11/12 mx-auto mt-4'>
                <Header></Header>
                <Update></Update>
                <Navbar></Navbar>
                <section className='mt-4'>
                 <Casual></Casual> 
                </section>
            </header>
            <main className='w-11/12 mx-auto *: grid grid-cols-12 mt-4 gap-5 mb-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftSide></LeftSide>
                </aside>
                <section className=' main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightSide></RightSide>
                </aside>
            </main>
            <footer>
                 <Footer></Footer>
            </footer>
           
        </div>
    );
};

export default HomeLayOut;
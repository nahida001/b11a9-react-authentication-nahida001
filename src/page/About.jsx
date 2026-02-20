import React from 'react';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import Casuals from '../HomeLayout/casual';
import Footer from '../component/Footer';
const About = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto mt-4'>
                <Header></Header>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto mt-4'>
               <Casuals></Casuals>
            </main>
            <footer className='w-11/12 mx-auto mt-4'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default About;
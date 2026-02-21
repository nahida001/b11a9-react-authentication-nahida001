import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../component/Header';
import Footer from '../component/Footer';
import EventDetailsCard from './EventDetailsCard';
import RightSide from '../HomeLayout/RightSide';

const EventDetails = () => {
    const data=useLoaderData();
    const {id}=useParams();
    const [event,setevent]=useState({})
    console.log(data,id);
    useEffect(()=>{
           const eventDetails=data.find((singlevent)=>singlevent.id == id)
           setevent(eventDetails)
    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 mb-3'>
            <section className='col-span-9'>
                 <h1 className='font-bold'>Event Details</h1>
                   <EventDetailsCard event={event}></EventDetailsCard>
               </section>
               <aside className='col-span-3 '>
                  <RightSide></RightSide>
               </aside> 
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default EventDetails;
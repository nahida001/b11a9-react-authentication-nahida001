import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Campcard from '../HomeLayout/Campcard';
const Categorycon = () => {
    const data=useLoaderData()
    const {id}=useParams()
    console.log(id,data);
    const [categoriscamp,setcategoriscamp]=useState([])
    useEffect(()=>{
        if(id == "0"){
            setcategoriscamp(data)
        }
        else{
            const Bootcamp=data.filter((camp)=>camp.category_id == id)
            setcategoriscamp(Bootcamp)
        }
       
    },[id,data])
   
    return (
        <div>
            
             <h1 className='font-bold space-y-3'>Confarence</h1>
             <div className='space-y-5'>
                {
                 categoriscamp.map((camp)=><Campcard key={camp.id} camp={camp}></Campcard>)   
                }
             </div>
        </div>
    );
};

export default Categorycon;
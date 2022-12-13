import React from "react";
import Img from '../../public/CoffeApp_madalyncoxOnvwNl5iRcY.png'


export default function Subscripton(){
return (
    
    <div className=' bg-[rgba(25,14,3,1.00)] w-full h-[35rem] relative py-[3rem]  px-[8rem] mt-[6rem]'>
        <h2 className='text-white text-[25px] font-semibold'>Subscription</h2>
        
    <div className="float-right ml-5">
        <img className='rounded' src = {Img} />
    </div>
        <p className='flex py-[2rem] pr-[6rem] text-white'>Never run out of your favorite coffees and Snacks.  With our auto-delivery subscription. Select how often your products arrive, pause and cancel anytime.</p>
        <button className=" bg-white text-black  opacity-85 text-[15px] p-4 rounded  mt-4">Shop Coffee Subscripton</button>
        
    </div>


) 
}
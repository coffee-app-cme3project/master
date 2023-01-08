import React from "react";
import Img from '../../public/CoffeApp_madalyncoxOnvwNl5iRcY.png'
import {Link} from "react-router-dom"


export default function Subscripton(){
return (
    

    <div className='bg-[rgba(25,14,3,1.00)] relative   shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[6em]'>
    <div className='lg:flex md:justify-content:end'>
        <div className=' p-12 text-left md:text-left'>
            <h2 className='text-white mb-[2rem] md:text-3xl'>SUBSCRIPTION</h2>
            <p className='text-white tracking-wide text-left font-normal md:text-xl md:pr-[4rem] md:text-left leading-9 flex '>
            Never run out of your favorite coffees and Snacks.  
            With our auto-delivery subscription. Select how often
            your products arrive, pause and cancel anytime.
            </p>

            <Link to = "CoffeeMenu">
            <button className=" bg-white text-black opacity-85 text-[17px] p-4 rounded mt-12">Shop Coffee Subscription</button>
            </Link>
        </div>
        <div className="md:shrink-0">
            <img className="rounded md:ml-5 p-8" src = {Img} alt="Coffee Pack" />
        </div>
    
    </div>
</div>





) 
}
import React from "react";
import ImgAsset from '../../public'
import {Link} from "react-router-dom"



export default function Coffee(){
return(
<div className='bg-[rgba(25,14,3,1.00)] relative   shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[10em] mt-[10rem]'>
    <div className='lg:flex md:justify-content:end'>
        <div className=' p-12 text-left md:text-left'>
            <h2 className='text-white mb-[2rem] md:text-3xl'>COFFEE</h2>
            <p className='text-white tracking-wide text-left font-normal md:text-xl lg:pr-[5rem] md:text-left leading-9 flex '>
                Drinking coffee is an enjoyable habit for coffee lovers.
                You can enjoy ordering your coffee without needing to 
                leave your desk at work. Just click on order, choose your 
                favorite coffee and we will deliver the order to your desk!
            </p>

            <Link to = "CoffeeMenu">
            <button className=" bg-white text-black opacity-85 text-xl p-3 rounded mt-[100px] ">Order Now</button>
            </Link>
        </div>
        <div className="md:shrink-0">
            <img className="rounded float-right w-full p-10 object-cover md:h-full md:w-[24rem] md:p-0 md:mr-[5em]" src = {ImgAsset.CoffeeApp_lukeporterzZfuH4lINlkunsplash1} alt="Coffee machine" />
        </div>
    
    </div>
</div>
);

}
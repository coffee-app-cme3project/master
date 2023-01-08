import React from "react";
import ImgAsset from '../../public'
import {Link} from "react-router-dom"



export default function Coffee(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] w-full  h-[50rem]  relative py-[9rem] px-[9rem] mt-[11rem]   '>
    <div className=" w-[24rem] h-[30rem] float-right ">
        <img className="rounded" src = {ImgAsset.CoffeeApp_lukeporterzZfuH4lINlkunsplash1} />
    </div>
    
    <div>
        <h2 className='flex text-white py-[2rem] text-3xl '>COFFEE</h2>
        <p className='text-white font-normal text-xl pr-[8rem] leading-9 flex '>Drinking coffee is an enjoyable habit for coffee lovers.
            You can enjoy ordering your coffee without needing to 
            leave your desk at work. Just click on order, choose your 
            favorite coffee and we will deliver the order to your desk!
 </p>

 <Link to = "CoffeeMenu">
 <button className=" bg-white text-black  opacity-85 text-[15px] text-xl p-3 rounded  mt-[100px] ">Order Now</button>
 </Link>
    
    </div>
    </div>

);

}
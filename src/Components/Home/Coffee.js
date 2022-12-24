import React from "react";
import ImgAsset from '../../public'



export default function Coffee(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] w-full  h-[50rem]  relative py-[9rem] px-[9rem] mt-[11rem]  '>
    <div className=" w-[24rem] h-[30rem] float-right ">
        <img className="rounded" src = {ImgAsset.CoffeeApp_lukeporterzZfuH4lINlkunsplash1} />
    </div>
    
    <div>
        <h2 className='flex text-white py-[2rem] '>Coffee</h2>
        <p className='text-white font-normal pr-[8rem] flex'>Drinking coffee is an enjoyable habit for coffee lovers.
            You can enjoy ordering your coffee without needing to 
            leave your desk at work. Just click on order, choose your 
            favorite coffee and we will deliver the order to your desk!
 </p>
 <button className=" bg-white text-black  opacity-85 text-[15px] p-3 rounded  mt-10 ">Order Now</button>
    </div>
    </div>

);

}
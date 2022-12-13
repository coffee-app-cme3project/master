import React from "react";
import ImgAsset from '../../public'



export default function Coffee(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] w-full  h-[51rem]  relative py-[8rem] px-[8rem] mt-[12rem]  '>
    <div className=" w-[28rem] h-[30rem] float-right ml-5">
        <img className="rounded" src = {ImgAsset.CoffeeApp_lukeporterzZfuH4lINlkunsplash1} />
    </div>
    
    <div>
        <h2 className='flex text-white py-[2rem] '>Coffee</h2>
        <p className='text-white pr-[8rem] flex'>Drinking coffee is an enjoyable habit for coffee lovers.
            You can enjoy ordering your coffee without needing to 
            leave your desk at work. Just click on order, choose your 
            favorite coffee and we will deliver the order to your desk!
 </p>
    </div>
    </div>

);

}
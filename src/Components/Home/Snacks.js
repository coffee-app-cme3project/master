import React from "react";
import ImgAsset from '../../public'
import {Link} from "react-router-dom"

export default function Snacks(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] w-full h-[50rem] relative py-[8rem] px-[9rem]  mt-[12rem]  '>
    <div className="float-right ml-5">
        <img className='w-[23rem] h-[32rem] rounded' src = {ImgAsset.CoffeeApp_christofferengstromjXZ2GgDbefwunsplash1} />
    </div>
    <div>
        <h2 className='flex text-white py-[2rem] text-3xl'>SNACKS</h2>
        <p className='text-white font-normal text-xl pr-[8rem] leading-9 flex'>Snacks can be both healthy and satisfying. Snacking can be as simple as grabbing an apple, a handful of nuts or a bowl of popcorn. 
        Here are some snack in our menu to grab and go. </p>
        
        <Link to = "SnacksMenu">
        <button className=" bg-white text-black  opacity-85  text-xl p-3 rounded  mt-[100px] ">Order Now</button>
        </Link>
    </div>
    </div>

);
}
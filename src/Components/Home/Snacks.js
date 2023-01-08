import React from "react";
import ImgAsset from '../../public'
import {Link} from "react-router-dom"

export default function Snacks(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] relative   shadow-md overflow-hidden md:max-w-full md:px-10 md:py-[11em] mt-[10rem]'>
    <div className='lg:flex md:justify-content:end'>
        <div className=' p-12 text-left md:text-left'>
            <h2 className='text-white mb-[2rem] md:text-3xl'>SNACKS</h2>
            <p className='text-white text-left font-normal md:text-xl lg:pr-[5rem] md:text-left leading-10 flex tracking-wide '>
            Snacks can be both healthy and satisfying. Snacking can be as 
            simple as grabbing an apple, a handful of nuts or a bowl of popcorn. 
            Here are some snack in our menu to grab and go.
            </p>

            <Link to = "SnacksMenu">
            <button className=" bg-white text-black opacity-85 text-xl p-3 rounded mt-[100px] ">Order Now</button>
            </Link>
        </div>
        <div className="md:shrink-0">
            <img className="rounded float-right w-full p-10 object-cover md:h-full md:w-[23rem] md:p-0 md:mr-[5em]"  src = {ImgAsset.CoffeeApp_christofferengstromjXZ2GgDbefwunsplash1} alt="Snacks" />
        </div>
    
    </div>
</div>

);
}
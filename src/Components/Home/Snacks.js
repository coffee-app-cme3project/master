import React from "react";
import ImgAsset from '../../public'

export default function Snacks(){
return(
    <div className='bg-[rgba(25,14,3,1.00)] w-full h-[50rem] relative py-[8rem] px-[8rem] mt-[12rem]  '>
    <div className="float-right ml-5">
        <img className='w-[400px] h-[550px] rounded' src = {ImgAsset.CoffeeApp_christofferengstromjXZ2GgDbefwunsplash1} />
    </div>
    <div>
        <h2 className='flex text-white py-[2rem] text-[25px] font-semibold'>Snacks</h2>
        <p className='text-white pr-[8rem] flex'>Lorem ipsum Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
    </div>
    </div>

);
}
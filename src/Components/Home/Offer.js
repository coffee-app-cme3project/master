import React from "react";
import ImgAsset from '../../public'
import Img2 from '../../public/CoffeeApp_Latte.png'
import Espresso from '../../public/CoffeeApp_Espresso.png'
import IceCoffee from '../../public/CoffeeApp_IceCoffee.png'
// import Products from "../OrderOnline/Products";
// import Product from "./Product";

export default function Types(){

    return(

<div className="">
    <div > 
        <h2 className='text-center pb-[3rem] pt-[5rem] text-[25px] font-semibold'>OFFERS OF THE DAY</h2>
    </div>
    
<div className="flex items-center justify-center  ">
    <div className="grid grid-cols-3 gap-x-[6rem] gap-y-5 pt-6">
         <div>
            <img className='LatteImage h-[27rem] w-[22rem] rounded  ' src = {Espresso} />
            <p className='text-center '>Espresso</p>
        </div>

         <div>
            <img className='EspressoImage h-[27rem] w-[22rem] rounded' src = {Img2} />
            <p className='text-center'>Latte</p>
        </div>
    
        <div>
            <img className=' h-[27rem] w-[22rem] rounded' src = {IceCoffee } />
            <p className='text-center '>Ice Coffe</p>
        </div>
    
     {/* {
       Products.map((curElem) =>{
        return <Product key ={curElem.id} {...curElem}/>;
       })}
      */}
    
    
    </div> 
</div>
</div> 
);
}
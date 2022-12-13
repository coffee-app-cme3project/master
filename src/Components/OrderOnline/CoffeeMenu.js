import React from 'react'
import  "./CoffeeMenu.css"
import Img from '../../public'
import ImgAsset from '../../public'
import Img2 from '../../public/CoffeeApp_Latte.png'
import Espresso from '../../public/CoffeeApp_Espresso.png'
import IceCoffee from '../../public/CoffeeApp_IceCoffee.png'

const CoffeeMenu = () => {
  return (
    <div className="relative font ">
       
    <div className="absolute  ">
    <div > 
        <h2 className='text-center  pt-[2rem]  text-[25px] font-semibold'>COFFEE MENU</h2>

    </div>
    
<div className=" flex  items-center justify-center text-[rgba(45,24,5,1.00)]   ">
    <div className="grid lg:px-[60px] lg:grid-cols-4 md:px-[20px] md:grid-cols-3  gap-x-[1rem] gap-y-12 pt-3 m-12  ">
         <div className='text-center '>
            <img className='  rounded h-[22rem] p-5 w-[19rem]  ' src = {Espresso} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>

        <div className='text-center'>
            <img className='h-[22rem] p-5 w-[19rem] rounded' src = {Img2} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>
    
        <div className='text-center'>
            <img className=' h-[22rem] p-5 w-[19rem]  rounded' src = {IceCoffee } />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>
        <div className='text-center'>
            <img className=' h-[22rem] p-5 w-[19rem]  rounded  ' src = {Espresso} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>

        <div className='text-center'>
            <img className='h-[22rem] p-5 w-[19rem] rounded' src = {Img2} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>
    
        <div className='text-center'>
            <img className='h-[22rem] p-5 w-[19rem]  rounded' src = {IceCoffee } />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>

        <div className='text-center'>
            <img className='h-[22rem] p-5 w-[19rem] rounded' src = {Img2} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>

        <div className='text-center'>
            <img className='h-[22rem] p-5 w-[19rem]  rounded' src = {Img2} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
				text-white  px-2 py-1  rounded'>Espresso</button>
        </div>

     

        

    
     {/* {
       Products.map((curElem) =>{
        return <Product key ={curElem.id} {...curElem}/>;
       })}
      */}
    
    
    </div> 
</div>
</div> 


    </div>

    
  )

}

export default CoffeeMenu;
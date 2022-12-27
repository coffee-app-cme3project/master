import React from 'react'
import ImgAsset from '../../public'
import {BiCoffeeTogo} from 'react-icons/bi'
import { useStateValue } from '../../context/StateProvider'


const PreferenceProducts = ({id,title,image,price}) => {
  const [{basket}, dispatch] = useStateValue();
  console.log("this")
  const addToBasket =() =>{
    
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image: image,
        price:price,
      }
    })
  }
  return (
    <div className="relative font ">
    <img className='w-full h-[45rem] absolute object-cover overflow-hidden sm:overflow-hidden  ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
<div className='flex flex-col items-center justify-center  '>
<div className='Bluredrec' />
<div className=' relative lg:flex  mt-[10rem]'>
    <img className='rounded h-[24rem] w-[20rem]' src = {image} />
    
    <div className='ml-[6rem] text-white  leading-[3.5rem] '>
        <p className='text-[30px] font-bold '>{title}</p>

   
        <p className='text-[20px] font-semibold '>
            <strong>{price}</strong>
            <small className='pl-1'>€</small>
      </p>

   
        <p className='text-[15px]'>Select your preference</p>
        
        
      <div className='flex  space-x-7'>
         
          <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>Sugar+</button>
          <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]' >Milk+</button>
          <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>Ice+</button>
          <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>Snacks</button>
      </div>
        <p className='text-[15px]'>Size Options</p>

      <div className='flex space-x-10'>
        <BiCoffeeTogo className='text-black text-[43px] hover:bg-[#90D377] '></BiCoffeeTogo>
        <BiCoffeeTogo className='text-black text-[40px] hover:bg-[#90D377]  '></BiCoffeeTogo>
        <BiCoffeeTogo className='text-black text-[37px] hover:bg-[#90D377] '></BiCoffeeTogo>
      </div>
        
      <div className='flex space-x-7 '>
        <p>Large</p>
        <p>Medium</p>
        <p>Small</p>
      </div>
        
        
        
        <button onClick={addToBasket} className='bg-white text-black w-[12rem] rounded hover:bg-[#90D377] '>Add to cart</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default PreferenceProducts
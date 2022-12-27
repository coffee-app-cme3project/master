import React from 'react'
import CheckoutProducts from './CheckoutProduct'

import Subtotal from './Subtotal'
import './Checkout.css'
import ImgAsset from '../../public'
import { useStateValue } from '../../context/StateProvider'



const Checkout = () => {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className="relative font ">
    <img className='w-full h-[45rem] absolute object-cover overflow-hidden sm:overflow-hidden  ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
    <div className='Bluredre w-full' />
    <div className="relative text-white text-[30px] font-semibold text-center p-[2rem]"  >
    <p>Items</p>
    </div>
    

    {basket.map(item =>(
        <CheckoutProducts
        id ={item.id}
        title ={item.title}
        image ={item.image}
        price={item.price}
          

        /> 
    ))}
    
    <Subtotal></Subtotal>
    </div>

  )
}

export default Checkout
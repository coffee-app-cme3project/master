import React from 'react'

import image from '../../public/CoffeeApp_Latte.png'



const CheckoutProducts = ({id,image,title,price}) => {
  return (


  
    <div className='relative float-left w-[50%] block lg:flex text-white m-[1rem] lg:ml-[13rem] leading-10'>
      
        <img className='rounded h-[20rem] w-[17rem] mx-13  ' src = {image} />
        <hr></hr>

       
        <div className='flex-col mt-20 ml-12'>
            <p>{title}</p>
            <p>Options:</p>
            <p>Size</p>
            <button>Remove from Basket</button>
        </div>
        <div className='felx-row mt-20'>
        <strong>{price}</strong>
        <small className='pl-1'>€</small>

      
        </div>
      
       
 </div>

    




  
  
  )
}

export default CheckoutProducts
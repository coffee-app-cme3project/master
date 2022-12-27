import React from 'react'

const Product = ({image,button}) => {
  return (
    
   
       
        <div className=''>
            <img className='  rounded h-[22rem]  w-full p-3  ' src = {image} />
            <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  mt-2
			text-white  h-12 w-[9rem]  rounded'>{button}</button>
          
        </div>
   
  )
}

export default Product
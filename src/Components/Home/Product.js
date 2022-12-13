import React from 'react'
import { Link } from 'react-router-dom';

export const Product = (curElem) => {
  const {id, name, image} = curElem;


  return (
    <Link to={`Coffee/${id}`}>
    <div className=''>
    <img className='h-[27rem] w-[22rem] rounded' src = {image} alt= {name} />
    <p className='text-center'>{name}</p>
    </div>

    </Link>

    )
}


export default Product();
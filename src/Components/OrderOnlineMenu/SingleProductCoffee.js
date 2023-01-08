import React from 'react'
import {Link} from 'react-router-dom'
import ImgAsset from '../../public'
import {BiCoffeeTogo} from 'react-icons/bi'
import { useStateValue } from '../../context/StateProvider'
import {connect} from 'react-redux';
import {addToCart,} from '../../redux/Shopping/shopping.action'




const SingleProduct = ({currentItem, addToCart,products}) => {

  
  return (
    <div className="relative font ">
    <img className='w-full h-[45rem] absolute object-cover overflow-hidden sm:overflow-hidden  ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
<div className='flex flex-col items-center justify-center  '>
<div className='Bluredrec' />
<div className=' relative lg:flex  mt-[10rem]'>
    <img className='rounded h-[24rem] w-[20rem]' src={currentItem.image} />
    
    <div className='ml-[6rem] text-white  leading-[3.5rem] '>
        <p className='text-[30px] font-bold '>{currentItem.name}</p>

   
        <p className='text-[20px] font-semibold '>
            <strong></strong>
            <small className='pl-1'>€{currentItem.price}</small>
      </p>

   
        <p className='text-[15px]'>Select your preference</p>
        
        
      <div className='flex flex-row space-x-7'>
         
          <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>{currentItem.Sugar}</button>
                        <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>{currentItem.Milk}</button>
                        <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>{currentItem.Design}</button>
                       <button className='text-black w-16 h-16 p-1 rounded-full 
                       bg-white hover:bg-[#90D377]'>{currentItem.Snacks}</button>
                   
      </div>
        <p className='text-[15px]'>Size Options</p>

      <div className='flex space-x-10'>
        <BiCoffeeTogo className='text-black text-[43px] hover:bg-[#90D377] '></BiCoffeeTogo>
        <BiCoffeeTogo className='text-black text-[39px] hover:bg-[#90D377]  '></BiCoffeeTogo>
        <BiCoffeeTogo className='text-black text-[36px] hover:bg-[#90D377] '></BiCoffeeTogo>
      </div>
        
   

          <div className='flex flex-row space-x-7'>
        <p className=''>{currentItem.Large}</p>
        <p className=''>{currentItem.Medium}</p>
        <p className=''>{currentItem.small}</p>

  
      </div>
        
        
        
        <button onClick={() => addToCart(currentItem.id)}className='bg-white text-black w-[12rem] rounded hover:bg-[#90D377] '>Add to cart</button> 
      </div>
    </div>
  </div>
</div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
    products: state.shop.products
  }
}

const mapDispatchToProps =dispatch => {
  return { 
    addToCart: (id) => dispatch(addToCart(id)), 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
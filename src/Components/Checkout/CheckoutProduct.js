import React, {useState} from 'react'
import './Checkout.css'

import image from '../../public/CoffeeApp_Latte.png'
import { useStateValue } from '../../context/StateProvider'
// import { incrementQuantity, decrementQuantity, removeItem} from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import {removeFromCart,adjustQty} from '../../redux/Shopping/shopping.action'





// const CheckoutProducts = ({id,image,title,price}) => {

const CheckoutProducts = ({itemData,removeFromCart,adjustQty}) => {
  // const [{basket}, dispatch] = useStateValue();
  // const removeFromBasket =() =>
  //     dispatch ({
  //       type: 'REMOVE_FROM_BASKET',
  //       id: id,
  //     })

  const dispatch = useDispatch()
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value) 
  };

  return (


  
    <div className='relative h-[22rem] p-10 rounded-xl shadow-lg bg-gray-200 float-left w-[50%] block lg:flex text-[rgba(45,24,5,1.00)] m-[1rem] lg:ml-[13rem] leading-10'>
      
        <img className='rounded h-[18rem] w-[16rem] mx-13  ' src = {itemData.image} />
  
      
       
        <div className='flex-col mt-20 ml-12'>
            <p className='text-[20px] font-bold'>{itemData.title}</p>
            <p>Options:</p>
            <p>Size</p>
            <button onClick={() => removeFromCart(itemData.id)} className='bg-[rgba(45,24,5,1.00)] text-white mt-2 w-[80px] rounded opacity-95' >Remove</button>
        </div>
        <div className='felx mt-20'>
        <strong className='ml-12'>{itemData.price}</strong>
        <small className='pl-1'>€</small>
        <div className='wrapper ml-11'>
          <span className='num'>qty: {itemData.qty}</span>
          
        
      </div>

        </div>
      
     
      
       
 </div>

    




  
  
  )
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart:(id) => dispatch(removeFromCart(id)),
    adjustQty:(id,value) =>dispatch(adjustQty(id,value))

  }
}

export default connect (null, mapDispatchToProps)(CheckoutProducts);

import React from 'react'
import CheckoutProducts from './CheckoutProduct'

import Subtotal from './Subtotal'
import './Checkout.css'
import ImgAsset from '../../public'
// import { useStateValue } from '../../context/StateProvider'

import {connect} from 'react-redux'

const Checkout = ({cart}) => {
    // const [{basket},dispatch] = useStateValue();

  return (
    <div className="relative font">
  
    <div className="relative text-bg-[rgba(45,24,5,1.00)] text-[25px] font-semibold text-center p-[2rem]"  >
    <p>Items</p>
    </div>
    


        {cart?.map((item) => (
      <CheckoutProducts 
      key ={item.id}
      itemData = {item}

      /> 
    ))}
    
    <Subtotal></Subtotal>
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Checkout);
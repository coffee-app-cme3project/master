import React from 'react'
import SingleProduct from './SingleProduct'
import Latte from '../../public/CoffeeApp_Latte.png'

const IceCoffee = () => {
  return (
    <SingleProduct
       title="Latte"
       price={4.99}
       image={Latte}

    />
  )
}

export default IceCoffee;
import React from 'react'
import SingleProduct from './SingleProduct'
import IceCoffeee from '../../public/CoffeeApp_IceCoffee.png'

const IceCoffee = () => {
  return (
    <SingleProduct
       title="Ice Coffee"
       price={5.99}
       image={IceCoffeee}

    />
  )
}

export default IceCoffee;
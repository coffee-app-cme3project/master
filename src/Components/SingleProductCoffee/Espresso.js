import React from 'react'
import SingleProduct from './SingleProduct'
import Espressoo from '../../public/CoffeeApp_Espresso.png'

const Espresso = () => {
  return (
    <SingleProduct
       title="Espresso"
       price={5.99}
       image={Espressoo}

    />
  )
}

export default Espresso;
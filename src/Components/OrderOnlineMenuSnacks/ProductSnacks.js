import React from 'react'
import {Link} from 'react-router-dom'
import {loadCurrentItemSnacks} from '../../redux/Shopping/shopping.action'
import {connect} from 'react-redux'

const ProductSnacks = ({productDataSnacks,loadCurrentItemSnacks}) => {
  return (
    <div>
    <img className='rounded  h-[360px] w-full p-2 shadow-lg  ' src={productDataSnacks.image}/>
    <div className='flex justify-between text-lg px-4 py-1'>
    <p>{productDataSnacks.name}</p>
    <p>{productDataSnacks.price} €</p>

    </div>
    <Link to ={`/singleproductsnacks/${productDataSnacks.id}`}>
    <button onClick={()=> loadCurrentItemSnacks(productDataSnacks)} className='text-white bg-[rgba(45,24,5,1.00)]  text-[18px]  mt-2
    text-white  h-12 w-[9rem] rounded'>Add to cart</button>
    </Link>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => {

return{

loadCurrentItemSnacks:(item)=> dispatch(loadCurrentItemSnacks(item))
};
}

export default connect (null, mapDispatchToProps)(ProductSnacks);
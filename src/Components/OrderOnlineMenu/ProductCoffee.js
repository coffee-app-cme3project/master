import React from 'react'
import {Link} from 'react-router-dom'
import {loadCurrentItem} from '../../redux/Shopping/shopping.action'
import {connect} from 'react-redux'

const ProductCoffee = ({productData,loadCurrentItem}) => {
  return (
    <div>
    <img className='rounded shadow-lg h-[360px] w-full p-2' src={productData.image}/>
    <Link to ={`/singleproductcoffee/${productData.id}`}>
    <button onClick={()=> loadCurrentItem(productData)} className='text-white bg-[rgba(45,24,5,1.00)]  text-[20px]  mt-2
    text-white h-[4rem] w-[9rem] p-1  rounded'>{productData.name}</button>
    </Link>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => {

return{

loadCurrentItem:(item)=> dispatch(loadCurrentItem(item))
};
}

export default connect (null, mapDispatchToProps)(ProductCoffee);
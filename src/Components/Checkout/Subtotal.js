import {FaCcPaypal} from 'react-icons/fa'
import {FaCcVisa} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa' 
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../context/StateProvider';
import { getBasketTotal } from '../../reducer'




const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue();
  return (
    <div className=' relative w-[20%] ml-[70%] bg-white text-black p-12 rounded-lg   text-center  leading-10'>
            <p className=''>Payment Method:</p>
            <div className=' flex text-12 gap-4 '>
                 <FaCcPaypal size={35}/>
                 <FaCcVisa size={35}/>
                 <FaCcMastercard size={35}/>
                 <FaCcPaypal size={35}/>
            </div>
            <p>Delivery: 15 minutes</p>
            <p>Address: 256 code</p>
            <p>Other Method: Cash on Delivery  </p>
    
    <CurrencyFormat
    renderText={(value) =>(
        <>
        
            <p className='text-center'> Total ({basket.length} items):
             <strong>{value}</strong>
            </p>
            <button className='bg-[rgba(45,24,5,1.00)]  text-white p-2 rounded  '>Confirm & Pay</button>
        </>
        )}
        decimalScale={2}
        value ={getBasketTotal(basket)}
        displayType ={"text"}
        thousandSeparator ={true}
        prefix={"€"}
    />
    
    </div>
  )
}

export default Subtotal;
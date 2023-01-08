import React from 'react'
import './Navbar.css'
import ImgAsset from '../../public'
import { Link } from 'react-router-dom';
import {CgMenu } from 'react-icons/cg';
import {CgClose } from 'react-icons/cg';
import {MdShoppingCart } from 'react-icons/md';
import {RiUser3Fill } from 'react-icons/ri';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext"
import "../../global.css"
import { useStateValue } from '../../context/StateProvider';
import {connect} from 'react-redux'
import {useState, useEffect} from "react";







const Navbar = ({cart}) => {
  const { user, logoutUser } = useContext(AuthContext);
  const [cartCount, setCartCount] =useState(0)

  useEffect(() =>{
    let count= 0;
    cart?.forEach((item) =>{
      count += item.qty;
    });

    setCartCount(count);
  },[cart, cartCount])

   const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

return (



<nav>
<div className=" bg-[rgba(45,24,5,1.00)] text-sm sm:px-6 py-2.5  ">
    <div className='container flex flex-wrap items-center justify-between mx-auto .fontForText'>
      
      {/* left side of Navbar */}
      <div className='flex items-center h-6 mr-3 sm:h-9'>
        <span className='LATEELI pl-6'>LATEELI</span>
        <img className='Ellipse7 ' src = {ImgAsset.CoffeeApp_Ellipse7} />
        <img className='Ellipse6 ' src = {ImgAsset.CoffeeApp_Ellipse6} />
      </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
            <CgMenu size={28} className='mr-3 '/>
        </button>

      {/* Right side of Navbar */}
      <div className='hidden w-full md:block md:w-auto' id="navbar-default">
        <ul className ='text-white p-3 mt-4 flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li  className='block py-2 pl-3 pr-2 list-none '>
                <Link to ='/'>HOME</Link>
            </li>
            <li  className='block py-2 pl-3 pr-4 list-none '>
                <Link to ='/SnacksMenu'>SNACKS</Link>
            </li>
            <li className='block py-2 pl-3 pr-4 list-none'>
              <Link to ='/CoffeeMenu'>COFFEE</Link>
            </li>
            <li className=' block py-2 pl-3 pr-4  list-none'>
                <Link to ='/subscriptionPage'>SUBSCRIPTON</Link>   
            </li>

          {user? (
            <>
              <Link to ='/UserProfile'>
                <li className='list-none p-2   '>
                    <button>HELLO, {user.username.toUpperCase()}</button>
                </li>
              </Link>
              
                <li name='logout' className='list-none p-2  '>
                    <button onClick={logoutUser}>LOGOUT</button>
                </li>
            </>
            ):(
              <div className="flex gap-2">
                <Link to ='/Login'>
                    <RiUser3Fill className=' w-10 h-7 mt-1   text-white '/> 
                </Link>
              </div>
          )}
        
          <div>
            <Link to='Checkout'>
              <MdShoppingCart className=' w-9 h-7 mt-1 text-white relative  '/>
              <div className='rounded-full bg-amber-400 flex flex-col items-center justify-center absolute mt-[-22px] ml-[17px] p-2.5' style={{ 
                color: "black", 
                width: "1rem", 
                height: "1rem", 
                transform: "translate(25%, 25%)",
                }}>
                {/* Interface showing how many quantities of 
                items have been added to the cart. */}
                {cartCount}
              </div>
            </Link>
          </div>
        </ul>
        
      </div>
    </div>
  </div>
</nav>

  

);
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar);


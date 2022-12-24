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



export default function Navbar () {
  const { user, logoutUser } = useContext(AuthContext);

return (

<nav>
  <div className=" bg-[rgba(45,24,5,1.00)] h-[80px] text-sm px-5">
    <div>
      <span className='LATEELI'>LATEELI</span>
      <img className='Ellipse7' src = {ImgAsset.CoffeeApp_Ellipse7} />
      <img className='Ellipse6 ' src = {ImgAsset.CoffeeApp_Ellipse6} />
    </div>
    
    <ul className='flex justify-end gap-2 pt-6  text-white .fontForText '>
      <li  className='p-2 list-none '>
          <Link to ='/'>HOME</Link>
        </li>
      <li  className='p-2 list-none '>
          <Link to ='/Snacks'>SNACKS</Link>
      </li>
      <li className=' list-none p-2'>
        <Link to ='/CoffeeMenu'>COFFEE</Link>
      </li>
      <li className=' list-none p-2 flex'>
          <Link to ='/subscription'>SUBSCRIPTON</Link>   
        </li>

      {user? (
      <>
    
       
        <li className='list-none p-2  '>
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
      <MdShoppingCart className=' w-9 h-7 mt-1 text-white relative  '/>
      <div className='rounded-full bg-red-700 flex flex-col items-center justify-center absolute mt-[-22px] ml-[17px] p-2.5' style={{ 
        color: "white", 
        width: "1rem", 
        height: "1rem", 
        transform: "translate(25%, 25%)",
        }}>
        3
      </div>
      </div>
      
    </ul>
    <div>
    
      <div className='mobile-navbar-btn'>
        <CgMenu name='menu-outline' className='mobile-nav-icon'/>
        <CgClose  name='menu-outline' className='mobile-nav-icon close-outline'/>
      </div>
    </div>
  </div>


</nav>

  

);
}


import React from 'react'
import './Login.css'
import ImgAsset from '../../public'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { useContext } from "react";

    

export default function Login() {

    const { loginUser } = useContext(AuthContext);
    const handleSubmit = e => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;
      username.length > 0 && loginUser(username, password);
    };
      




return (

    <div className="relative font  ">
        <img className='w-full lg:h-[45rem] absolute object-cover overflow-hidden sm:overflow-hidden min-h-screen  ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
    <div className='flex flex-col items-center justify-center  '>
    <div className='Bluredrec' />
    </div>
            
    
        
        <div className='relative flex flex-col items-center justify-center pt-[10rem]  '>
        <p className=' text-white font-bold text-3xl m-2'>Login</p>
        
            <form onSubmit={handleSubmit} className = 'flex flex-col text-white items-center justify-center m-5  '>
                
                <input className='p-4 m-5 text-black h-9 w-[20rem] rounded-md h-[3rem] opacity-95' 
                type="text"
                name="username" 
                id="username" 
                placeholder="Username"   />
                <input className=' p-4 text-Black m-5 h-9 text-black w-[20rem] rounded-md h-[3rem]' 
                type="password"
                name="password"  
                id="password" 
                placeholder="Password"  />
                <button className=' m-5 bg-[rgba(255,149,0,1.00)] w-[200px] h-[3rem] rounded-md'>Log In</button>
            </form>
            
            <div className='flex flex-col  items-center justify-center '>
            <p className='text-white   text-center font-light '> Don't have an account? </p>
            <Link to='/Signup'>
            <p  className='text-white font-bold'>Signup</p>
            </Link>
            
            </div>
        </div>
    </div>
    
)
}
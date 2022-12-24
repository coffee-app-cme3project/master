import React from 'react'
import '../Signup/Login.css'
import ImgAsset from '../../public'
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";


export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { registerUser } = useContext(AuthContext);

    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, password, password2);
      };


    return (




    <div className="relative font ">
    <img className='w-full absolute h-[45rem] object-cover overflow-hidden  ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
    <div className='flex flex-col items-center'>
        <div className='Rectangle40 '  />
        <div className='Bluredrec' />
        
    </div>
    
    <div className='relative flex flex-col items-center justify-center pt-[8rem]  '>
            <p className='m-5 text-white font-bold text-3xl'>SignUp</p>
        
            <form onSubmit={handleSubmit} className = 'flex flex-col text-white items-center justify-center '>
                
                <input className='p-4 m-5 text-black h-9 w-[20rem] rounded-md h-[3rem] opacity-95' 
                    type='text' 
                    id='username'
                    onChange={e => setUsername(e.target.value)} 
                    name='username' 
                    placeholder="Username"
                    required  />
                <input className='p-4  text-Black m-5 h-9 text-black w-[20rem] rounded-md h-[3rem]' 
                    type='password' 
                    name='password' 
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password' 
                    required />
                <input className='p-4  text-Black m-5 h-9 text-black w-[20rem] rounded-md h-[3rem]' 
                    type='password'
                    name='password2'  
                    id='password2'
                    onChange={e => setPassword2(e.target.value)}
                    placeholder='Confirm Password' 
                    required />
                    <p className='text-red-600'>{password2 !== password ? "Passwords do not match" : ""}</p>

                <button className='m-5 bg-[rgba(255,149,0,1.00)] w-[200px] h-[3rem] rounded-md'>Signup</button>
            
            </form>
            
            <div className='flex flex-col  items-center justify-center '>
            
                    
                
            <p className='text-white m-3 text-center '> By Signing up, <br/>you agree to our terms and privacy policy.</p>
            </div>
        </div>
    </div>
    
)
    }

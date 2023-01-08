import React from 'react'
import supriseImage from '../../public/suprise.png'

const Suprise = () => {
  return (
            <div className='bg-white w-full  h-[35rem]  relative py-[6rem] px-[9rem]'>
            <div className=" w-[22rem] h-[25rem] float-left mr-5">
                <img className="rounded" src = {supriseImage} />
            </div>
            
            <div className='text-[rgba(25,14,3,1.00)] '>
                <h2 className='flex py-[2rem] pl-[8rem] text-3xl '>SUPRISE A FRIEND</h2>
                <p className='flex pl-[8rem] font-normal text-xl leading-8'>Do you want to surprise your friend at work? 
                Then what is better than getting a coffee to their workplace! 
         </p>
         <button className=" bg-[rgba(25,14,3,1.00)] text-white opacity-85 text-xl p-3 rounded mt-[70px] ml-[8rem]">Let's Go</button>
        
            </div>
            </div>
  )
}

export default Suprise
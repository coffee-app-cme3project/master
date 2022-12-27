 import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import  "./CoffeeMenu.css"
import productCategories from "./CoffeeProducts"
import Espresso from '../../public/CoffeeApp_Espresso.png'
import Latte from '../../public/CoffeeApp_Latte.png'
import IceCoffee from '../../public/CoffeeApp_IceCoffee.png'
import Product from './Product'
import PreferenceProducts from '../SingleProductCoffee/SingleProduct'




const CoffeeMenu = () => {
  return (
  <div className='text-center  pt-[2rem]  text-[25px] font-semibold'>COFFEE MENU   
     
    <div className="grid lg:px-[60px] lg:grid-cols-4 md:px-[20px] md:grid-cols-3  gap-x-[2rem] gap-y-12 pt-3 m-12  ">
    
    <Link to="Espresso">
    <Product 
      button='Espresso'
      image={Espresso}
    />
    </Link>


  <Link to="Latte">
  <Product 
    button='Latte'
    image={Latte}
    />
    </Link>
  
  <Link to="IceCoffee">
    <Product 
    button='Ice Coffee'
    image={IceCoffee}
    />
  </Link>
  
  
    <Product 
      button='Espresso'
      image={Espresso}
    />

    
    <Product 
    button='Latte'
    image={Latte}
    />

    <Product 
    button='Ice Coffee'
    image={IceCoffee}
    />

  <Product 
    button='Latte'
    image={Latte}
    />

    <Product 
    button='Ice Coffee'
    image={IceCoffee}
    />
    

    </div>
  </div>

  )
}














//For static Website
// const CoffeeMenu = () => {
//   return (
  
//   <div className='text-center  pt-[2rem]  text-[25px] font-semibold'>COFFEE MENU   
//      <div className="grid lg:px-[60px] lg:grid-cols-4 md:px-[20px] md:grid-cols-3 gap-x-[1rem] gap-y-12 pt-3 m-12">  
//     {
//       productCategories.map( products =>{
        
//         return(
//          <div className='text-center' key={products.id}>
          
//               <img className='h-[22rem] p-5 w-[19rem] rounded' src={products.image}/>
//               <NavLink to={`/singleproduct/${products.id}`}>
//               <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				      text-white  px-2 py-1  rounded'>{products.name}</button>
//               </NavLink>
//         </div>
//         )
//       })
//     }
//     </div>
//   </div>

//   )
// }
 
// export default CoffeeMenu;

// import Img from '../../public'
// import ImgAsset from '../../public'
//  import Img2 from '../../public/CoffeeApp_Latte.png'
// import Espresso from '../../public/CoffeeApp_Espresso.png'
//  import IceCoffee from '../../public/CoffeeApp_IceCoffee.png'
// import StoreItems from './Products.json'
// import StoreItem from '../Home/StoreItem'
// const CoffeeMenu = () => {
// 
//     return (
    
//  <div className=" flex  items-center justify-center text-[rgba(45,24,5,1.00)]   ">
//     <div className="grid lg:px-[60px] lg:grid-cols-4 md:px-[20px] md:grid-cols-3  gap-x-[1rem] gap-y-12 pt-3 m-12  ">
//          <div className='text-center '>
//             <img className='  rounded h-[22rem] p-5 w-[19rem]  ' src = {Espresso} />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>

//         <div className='text-center'>
//             <img className='h-[22rem] p-5 w-[19rem] rounded' src = {Img2} />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>
    
//         <div className='text-center'>
//             <img className=' h-[22rem] p-5 w-[19rem]  rounded' src = {IceCoffee } />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>
//         <div className='text-center'>
//             <img className=' h-[22rem] p-5 w-[19rem]  rounded  ' src = {Espresso} />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>

//         <div className='text-center'>
//             <img className='h-[22rem] p-5 w-[19rem] rounded' src = {Img2} />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>
    
//         <div className='text-center'>
//             <img className='h-[22rem] p-5 w-[19rem]  rounded' src = {IceCoffee } />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>

//         <div className='text-center'>
//             <img className='h-[22rem] p-5 w-[19rem] rounded' src = {Img2} />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>

//         <div className='text-center'>
//             <img className='h-[22rem] p-5 w-[19rem]  rounded' src = {Img2} />
//             <button className='text-white bg-[rgba(45,24,5,1.00)]  text-[25px]  m-1
// 				text-white  px-2 py-1  rounded'>Espresso</button>
//         </div>

     

    

    
    
    
//     </div> 
//  </div>





    
// )
// }

 export default CoffeeMenu;

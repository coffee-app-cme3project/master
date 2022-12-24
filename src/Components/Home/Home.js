import React from "react";
import ImgAsset from '../../public'
import Coffee from "./Coffee";
import Snacks from "./Snacks";
import Subscripton from "./Subscription";
import Types from "./Offer";
import Footer from "../Footer/Footer";
import Suprise from "./Suprise";
import "../../global.css"
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import UserInfo from "../UserInfo/UserInfo";
import frame from "../../public/Frame 1.png"


export default function Header() {
	const { user } = useContext(AuthContext);
	
	return (

		<div className="relative .fontForText font-medium  ">
		 {user && <UserInfo user={user} />}
	
			
		<div className='absolute w-full h-[45rem] sm:h-35 flex'>
				<img className='w-full object-cover ' src={ImgAsset.CoffeeApp_nathandumlao6VhPY27jdpsunsplash1} />
				<img  className="flex absolute w-full h-[45rem] "src={frame}></img>
		</div>
		
		<div className='relative text-[35px]  text-white flex flex-col items-center justify-center h-[33rem]'>
				<h1 className='font-bold fontForLogo '>Want Group Order ?</h1>
				<h2 className='m-4'>We are here for you</h2>
				<button className='bg-white opacity-90 text-[25px]  m-4 ]
				text-[rgba(45,24,5,1.00)] font-bold py-2 px-4 rounded' type="button">Order Online</button>
		</div>

			<Coffee></Coffee>
			<Types></Types>
			<Snacks></Snacks>
			<Suprise></Suprise>
			<Subscripton></Subscripton>
			<Footer />


		</div>

	)
}
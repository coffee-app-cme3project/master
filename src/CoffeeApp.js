import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Coffee from './Components/Home/Coffee'
import Types from './Components/Home/Offer'
import Snacks from './Components/Home/Snacks'
import Subscripton from './Components/Home/Subscription'
import Login from './Components/Signup/Login'
import SignupInfo from './Components/Signup/SignupInfo'
import Signup from './Components/Signup/Signup'
import CoffeeMenu from './Components/OrderOnlineMenu/CoffeeMenu'
import PreferenceProducts from './Components/SingleProductCoffee/SingleProduct'
// import SingleProduct from './Components/OrderOnlineMenu/SingleProduct'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import ProtectedPage from "./utils/ProtectedPage";
import PrivateRoute from "./utils/PrivateRoute";
import IceCoffee from './Components/SingleProductCoffee/IceCoffee'
import Latte from './Components/SingleProductCoffee/Latte'
import Espresso from './Components/SingleProductCoffee/Espresso'
import Checkout from './Components/Checkout/Checkout'

export default function CoffeeApp () {
return (


	<div className='CoffeeApp_CoffeeApp'>
	<Router>

	<AuthProvider>
		<Navbar/>
		
		<Switch>
			<PrivateRoute exact path="/protected" component={ProtectedPage}/>
			<Route exact path="/" component={Home}/>
			<Route path="/Coffee" component={Coffee}/>
			<Route path ="/Types" component={Types}/>
			<Route path="/Snacks" component={Snacks}/>
			<Route path="/Subscription"component={Subscripton}/>
			<Route path="/Login" component={Login}/>
			<Route path="/Signup" component={Signup}/>
			<Route path="/SignupInfo" component={SignupInfo}/>
			<Route path="/CoffeeMenu" component={CoffeeMenu}/>
			{/* <Route path="/singleproduct/:id" component={SingleProduct}/> */}
			<Route path="/PreferenceProducts" component={PreferenceProducts}/>
			<Route path="/IceCoffee" component={IceCoffee}/>
			<Route path="/Latte" component={Latte}/>
			<Route path="/Espresso" component={Espresso}/>
			<Route path="/Checkout" component={Checkout}/>
		


			</Switch>
			
		</AuthProvider>
		
	
	</Router>


	</div>		
	
)
}
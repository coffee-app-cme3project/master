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
import CoffeeMenu from './Components/OrderOnline/CoffeeMenu'
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import ProtectedPage from "./utils/ProtectedPage";
import PrivateRoute from "./utils/PrivateRoute";

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


			</Switch>
		</AuthProvider>
		
	
	</Router>


	</div>		
	
)
}
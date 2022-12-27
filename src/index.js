import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CoffeeApp from "./CoffeeApp";
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from "./context/StateProvider";
import reducer,{ initialState } from "./reducer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

< BrowserRouter>

<StateProvider initialState={initialState} reducer={reducer}>
  <CoffeeApp />
</StateProvider>

</BrowserRouter>

);
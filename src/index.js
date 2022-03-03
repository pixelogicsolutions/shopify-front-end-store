import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./reducer/store"
import App from "./components/App"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Custom.css"
import client from "./action/ShopifyClient"
import { useShopify } from "./action/help/shopify.help"


  

ReactDOM.render(
	
	<Provider store={store}>
		
		<App />
	</Provider>,
	document.getElementById("root")
)
reportWebVitals();

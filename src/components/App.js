import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Products from "./Products"
import Cart from "./Cart"
import Home from "./Home"
import ProductView from "./ProductView"
import { useShopify } from "../action/help/shopify.help"
import { Container } from "react-bootstrap"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	

	const {
		createShop,
		createCheckout,
		fetchProducts,
		//fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		
		//fetchCollection()
	}, [])




	return (
		<Router>
			<Route path="/Home" component={Home} />
      		<Redirect from="/" to="/home" />
			<Route path="/Home" component={Products} />
			<Route path="/Product/:productId" component={ProductView} />
			<Route path="/" component={Cart} />
		</Router>
		
	)
}

import React from "react"
import { useShopify } from "../action/help/shopify.help"
import { Container } from "react-bootstrap"
import Cart from "./Cart"
import Header from "./header/Header"



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	const { shopDetails, openCart } = useShopify()

	function handleOpen(e) {
		e.preventDefault()
		openCart()
	}

	return (

		<>
		<Cart/>
		<Container fluid className="headerbg mx-0 p-0">
		<div className="d-flex justify-content-end" >
            <div className="mb-auto p-2 bd-highlight cart" onClick={handleOpen}>
                <span className='cart-icon'>
                    <img src="images/card-icon.svg" alt="cart" title="shopping cart"/></span> 
                <span className='cart-indicator'>0</span>
            </div>
        </div>
      
         <div className="pt-3 pb-3 justify-content-md-center">
            <div className='col'> </div>
            <div className="text-center"> 
                <img src="images/hulk-apps-logo.svg" alt="Hulk App" className='logo' />
                <h1 className='pb-3 mb-3'>{shopDetails.name}</h1>
                <p className='pb-3 mb-3'>{shopDetails.description}</p>

            </div>
            <div></div>
        </div>

    </Container>
	</>
	)
}

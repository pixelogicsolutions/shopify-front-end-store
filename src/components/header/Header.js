import React,  { useState, useContext } from 'react';
import {Container }from 'react-bootstrap';
import "./Header.css";
import Cart from '../Cart';
import { useShopify } from '../../action/help/shopify.help';


export default function Header( ) {
    const { openCart } = useShopify()

	function handleOpen(e) {
		e.preventDefault()
		openCart()
	}

return(
    
<React.Fragment>
    
    <Container fluid className="headerbg mx-0 p-0">
    <Cart/>
        <div className="d-flex justify-content-end" >
            <div className="mb-auto p-2 bd-highlight cart" onClick={handleOpen} >
                <span className='cart-icon'>
                    <img src="../images/card-icon.svg" alt="cart" title="shopping cart"/></span> 
                <span className='cart-indicator'>0</span>
            </div>
        </div>

      
 
        <div  className="pt-3 pb-3 justify-content-md-center">
            <div className='col'> </div>
            <div className="text-center"> 
                <img src="../images/hulk-apps-logo.svg" alt="Hulk App" className='logo' />
                <h1 className='pb-3 mb-3'>Featured Products</h1>
                <p className='pb-3 mb-3'>Reference site about Lorem Ipsum, giving information on its origins,<br/> as well as a random Lipsum generator.
</p>

            </div>
            <div></div>
        </div>

    </Container>

</React.Fragment>

);
}
import { PRODUCTS_FOUND, PRODUCT_FOUND ,
 COLLECTION_FOUND ,
 CHECKOUT_FOUND ,
 SHOP_FOUND ,
 ADD_VARIANT_TO_CART ,
 UPDATE_QUANTITY_IN_CART,
 REMOVE_LINE_ITEM_IN_CART,
 OPEN_CART,
 CLOSE_CART,
 COLLECTION_ALL_FOUND,
 CART_COUNT} from "./Type"
 import client from "./ShopifyClient"



// Gets all the products from Shopify
export const  getProducts = ()=> {
	return async (dispatch) => {
		await client.collection.fetchAllWithProducts().then((resp) => {
			dispatch({
				type: PRODUCTS_FOUND,
				payload: resp,
			})
		})
	}
}

// Gets individual item based on id
export const  getProduct = (id) => {
	return async (dispatch) => {
		const resp = await client.product.fetch(id)
		dispatch({
			type: PRODUCT_FOUND,
			payload: resp,
		})
		return resp
	}
}

//Gets a  collection based on from shopify
export const  getAllCollection = async ()=> {

	return async (dispatch) => {
		const resp = await client.collection.fetchAllWithProducts()
			// Do something with the collections
			console.log(resp);
			console.log(resp[0].products);

			dispatch({
				type: COLLECTION_ALL_FOUND,
 				payload: resp.products,
 			})
 	}
 }


 //Gets a  collection based on that collection's id

export const  getCollection = (id) => {
	const collectionId = id
	return (dispatch) => {
		client.collection.fetchWithProducts(collectionId).then((resp) => {
			dispatch({
				type: COLLECTION_FOUND,
 				payload: resp.products,
 			})
 		})
 	}
 }


 export const getCheckout = async (checkoutId) => {
	return async (dispatch) => {
      await client.checkout.fetch(checkoutId).then((checkout) => {
        dispatch({
				type: CHECKOUT_FOUND,
				payload: checkout,
			})
      })
      .catch((err) => console.log(err));
	}
  };


// Creates initial checkout state from Shopify
export const checkout = () => {
	return (dispatch) => {
		client.checkout.create().then((resp) => {
			localStorage.setItem("checkout", checkout.resp);
			dispatch({
				type: CHECKOUT_FOUND,
				payload: resp,
			})
		})
	}
}

// Gets Shopify store information
export const shopInfo = () => {
	return (dispatch) => {
		client.shop.fetchInfo().then((resp) => {
			dispatch({
				type: SHOP_FOUND,
				payload: resp,
			})
		})
	}
}

// Adds variants to cart/checkout
export const  addVariantToCart = (checkoutId, lineItemsToAdd) => {
	return async (dispatch) => {
		const response = await client.checkout.addLineItems(
			checkoutId,
			lineItemsToAdd
		)
		dispatch({
			type: ADD_VARIANT_TO_CART,
			payload: response,
		})
		return response
	}
}

// Updates quantity of line items in cart and in checkout state
export const  updateQuantityInCart = (lineItemId, quantity, checkoutId) => {
	const lineItemsToUpdate = [
		{ id: lineItemId, quantity: parseInt(quantity, 10) },
	]

	return async (dispatch) => {
		const resp = await client.checkout.updateLineItems(
			checkoutId,
			lineItemsToUpdate
		)
		dispatch({
			type: UPDATE_QUANTITY_IN_CART,
			payload: resp,
		})
		return resp
	}
}

// Removes line item from cart and checkout state
export const  removeLineItemInCart = (checkoutId, lineItemId) => {
	return (dispatch) => {
		client.checkout.removeLineItems(checkoutId, [lineItemId]).then((resp) => {
			dispatch({
				type: REMOVE_LINE_ITEM_IN_CART,
				payload: resp,
			})
		})
	}
}

// To close the cart
export const  handleCartClose = () => {
	return {
		type: CLOSE_CART,
	}
}

// To open the cart
export const  handleCartOpen = () => {
	return {
		type: OPEN_CART,
	}
}

// Set the count of items in the cart
export const  handleSetCount = (count)=> {
	return {
		type: CART_COUNT,
		payload: count,
	}
}


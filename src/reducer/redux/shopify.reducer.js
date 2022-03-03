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
    CART_COUNT} from "../../action/Type"

const initialState = {
	isCartOpen: false,
	cartCount: 0,
	checkout: {},
	products: [],
	collections: [],
	featured: [],
	product: {},
	shop: {},
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {

	switch (action.type) {
		case PRODUCTS_FOUND:
			return { ...state, products: action.payload }
		case PRODUCT_FOUND:
			return { ...state, product: action.payload }
		case COLLECTION_FOUND:
			return { ...state, featured: action.payload }
		case COLLECTION_ALL_FOUND:
			return { ...state, collections: action.payload }
		case CHECKOUT_FOUND:
			return { ...state, checkout: action.payload }
		case SHOP_FOUND:
			return { ...state, shop: action.payload }
		case ADD_VARIANT_TO_CART:
			return { ...state, checkout: action.payload }
		case UPDATE_QUANTITY_IN_CART:
			return { ...state, checkout: action.payload }
		case REMOVE_LINE_ITEM_IN_CART:
			return { ...state, checkout: action.payload }
		case OPEN_CART:
			return { ...state, isCartOpen: true }
		case CLOSE_CART:
			return { ...state, isCartOpen: false }
		case CART_COUNT:
			return { ...state, cartCount: action.payload }
		default:
			return state
	}
}

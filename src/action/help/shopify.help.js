import { useSelector, useDispatch } from "react-redux"

import {getProducts,
    getProduct,
    getCollection,
	getAllCollection,
    checkout,
    shopInfo,
    handleCartClose,
    handleCartOpen,
    handleSetCount,
    addVariantToCart,
    updateQuantityInCart,
    removeLineItemInCart,} from "../Shopify.action"

export function useShopify() {
	const dispatch = useDispatch()
	const cartStatus = useSelector((appState) => appState.shopifyState.isCartOpen)
	const cartCount = useSelector((appState) => appState.shopifyState.cartCount)
	const products = useSelector((appState) => appState.shopifyState.products)
	const collections = useSelector((appState) => appState.shopifyState.collections)
	const product = useSelector((appState) => appState.shopifyState.product)
	const featured = useSelector((appState) => appState.shopifyState.featured)
	const checkoutState = useSelector((appState) => appState.shopifyState.checkout)
	const shopDetails = useSelector((appState) => appState.shopifyState.shop)
	const fetchProducts = () => dispatch(getProducts())
	const fetchCollections = () => dispatch(getAllCollection())
	const fetchProduct = (id) => dispatch(getProduct(id))
    const fetchCollection = (id) => dispatch(getCollection(id))
	const createCheckout = () => dispatch(checkout())
	const createShop = () => dispatch(shopInfo())
	const closeCart = () => dispatch(handleCartClose())
	const openCart = () => dispatch(handleCartOpen())
	const setCount = (count) => dispatch(handleSetCount(count))

	const addVariant = (checkoutId, lineItemsToAdd) =>
		dispatch(addVariantToCart(checkoutId, lineItemsToAdd))
	const updateQuantity = (lineItemId, quantity, checkoutID) =>
		dispatch(updateQuantityInCart(lineItemId, quantity, checkoutID))
	const removeLineItem = (checkoutId, lineItemId) =>
		dispatch(removeLineItemInCart(checkoutId, lineItemId))

	return {
		products,
		product,
		featured,
		cartStatus,
		checkoutState,
		cartCount,
		shopDetails,
		collections,
		addVariant,
		fetchProducts,
		fetchProduct,
		fetchCollection,
		createCheckout,
		createShop,
		closeCart,
		openCart,
		updateQuantity,
		removeLineItem,
		setCount,
		fetchCollections
	}
}
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useShopify } from "../action/help/shopify.help"
import Header from "./header/Header"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	const {
		product,
		fetchProduct,
		openCart,
		checkoutState,
		addVariant,
	} = useShopify()
	const id = props.match.params.productId
	const defaultSize = product.variants && product.variants[0].id.toString()
	const [size, setSize] = useState("")
	const [quantity, setQuantity] = useState(1)


	const description = product.description && product.description.split(".")

	function changeSize(sizeId, quantity) {
		openCart()
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
			
		} else {
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		}
	}

	useEffect(() => {
		fetchProduct(id)
	}, [id])





	return (
		<>
		<Header/>
		<div className="container">
			<div className="row mt-5 mb-3">
				<div className=" col image-fixed-scroll">					
					{product.images &&
						product.images.map((image, i) => {
							return (
								<div className="col">
								<img
									key={image.id + i}
									src={image.src}
									alt={`${product.title}`}
								/>
								</div>
								
							)
						})}
						
				</div>
				<div className="col Product__info mx-3">
					<h2 className="Product__title2">{product.title}</h2>
					<ul className="Product__description">
						{description &&
							description.map((each, i) => {
								return <li key={`line-description +${i}`}>{each}</li>
							})}
					</ul>
					<div className="row mx-3 ">

					<div className="col"> 
					<div class="mb-3 input-group">
						<span class="input-group-text">Size</span>
						<select
							id="prodOptions"
							className="form-select form-select"
							name={size}
							onChange={(e) => {
								setSize(e.target.value)
							}}
						>
							
							{product.variants &&
								product.variants.map((item, i) => {
									return (
										<option
											value={item.id.toString()}
											key={item.title + i}
										>{`${item.title}`}</option>
									)
								})}
						</select>
					</div>
					</div>
					
					

					<div className="col ">
					<div class="mb-3 input-group">
						<span class="input-group-text">Qty</span>
						<input
							className="quantity form-control"
							type="number"
							min={1}
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value)
							}}
							
						></input>
						</div>
					</div>
					<h3 className="Product__price">
						${product.variants && product.variants[0].price}
					</h3>
					
					<button
						className="prodBuy button"
						onClick={(e) => changeSize(size, quantity)}
					>
						Add to Cart
					</button>
				</div>
				</div>
			</div>
		</div>
		</>
	)
}

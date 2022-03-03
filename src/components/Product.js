import React, {useEffect, useState} from 'react';
import { useShopify } from "../action/help/shopify.help"


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

	const { products, product, fetchProduct, openCart,	checkoutState,	addVariant, } = useShopify()
    const [filteredata, setFilterdata, ] = useState([])

	const defaultSize = product.variants && product.variants[0].id.toString()
	const [size, setSize] = useState("")
	const [quantity, setQuantity] = useState(1)


	useEffect(() => {
		setFilterdata(products)
	 },[products]) 


	 // Starting number of visible Jobs
	 const [visiblejobs, setVisiblejobs] = useState(9)

	 // Set the visible jobs to the current amount + 3
	 const loadMore = () => {
	   setVisiblejobs(prevVisiblejobs => prevVisiblejobs + 3);
	 }
 

	 const handleClick = (e, product_id)=> {
		e.preventDefault()
		const id = product_id
		//alert("product_id" + product_id)
		fetchProduct(id).then((res) => {
		//	console.log ("res" + res)
			props.history.push(`/Product/${res.id}`)
		})
		
	}
	const filterResult =(title) =>{

		const result = products.filter((curData)=>{
			return curData.title === title
		})
		setFilterdata(result)
	}
	
	function changeSize(sizeId, quantity) {
		openCart()
		
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		
	}


	return (
		<>
			<div className="row mt-3 mb-3">

				<div className="col ">
					<button className='button' onClick={()=>filterResult('MEN')}> Men </button> <button className='button' onClick={()=>filterResult('Women')}> Women </button>
				</div>
				<div className="col text-end">

				<select name="sources" id="sources" class="custom-select sources button" placeholder="Source Type">
				<option value="hide">Sort by values</option>  
					<option value="office_0">Relevance</option>  
					<option value="office_1">Title</option>
					<option value="office_2">Recently Updated</option>
					<option value="office_2">Product Ventor</option>
					<option value="office_2">Product Type</option>
				</select>
			

				</div>
				</div>
				<div className="row">

			

{filteredata.map((collection) => {

                  return collection.products.map((product,i) => (
                    <div className="col-md-3 mb-5"  key={product.id + i} >
                        <div> 
                            <img src={product.images[0]?.src  ?  product.images[0].src  :  ""  } alt="" width="100%"/>
                        </div>
                        <div className="row mt-2 mb-2">
                            <div className="col-8">{product.title}</div> 
                            <div className="col-4 text-end">${product.variants[0].price} </div>
                        </div>
						<div className="row mt-2 mb-2">
                        <div className="col">
						{product.variants.title ? product.variants.title : "no title "}
						</div>
						</div>
                        {/*<div className="row mt-2 mb-2">
						 	{product.variants[0].selectedOptions[1]?.value ? product.variants[0].selectedOptions[1].value : ""}
						 </div>
						<div className="row">
								<div className="col" id= {i}>

									<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
										<input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
										{product.variants[0].selectedOptions[1]?.value ? <label className="btn btn-outline-primary" for="btnradio1"> {product.variants[0].selectedOptions[1].value }</label>: ""}
									</div>
								</div>
							</div>*/}
							<button
						className="prodBuy button"
						onClick={(e) => changeSize(size, quantity)}
					>
						Add to Cart
					</button>
                        <button className="Product__buy button"	onClick={(e) => handleClick(e, product.id)}	>
								view Details
						</button>

                    </div> 
                   ))
                })}

				
				
				</div>
				</>
	)
}

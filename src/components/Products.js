import React from "react"
import Product from "./Product"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	return (
		<div className="container mt-5 mb-3">
			<Product history={props.history} />
		</div>
	)
}

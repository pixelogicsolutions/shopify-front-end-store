import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./reducer/store"
import App from "./components/App"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Custom.css"


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
reportWebVitals();

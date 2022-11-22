import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Header } from "./components/ui"
import { EditProduct, NewProduct, Products } from "./components/products"

import { Provider } from "react-redux"
import store from "../store"

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Header />

				<div className='container mt-5'>
					<Routes>
						<Route path='/' element={<Products />} />
						<Route path='/products/new' element={<NewProduct />} />
						<Route path='/products/edit/:id' element={<EditProduct />} />
					</Routes>
				</div>
			</Provider>
		</Router>
	)
}

export default App

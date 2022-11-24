import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"

import { useNavigate } from "react-router-dom"

import { Product } from "../../../ts/interfaces/product.interface"

import { ProductActions, State } from "../../../store"

const NewProduct = () => {
	const [product, setProduct] = useState<Product>({ name: "", price: 0 })

	const dispatch = useDispatch()
	const { createNewProduct } = bindActionCreators(ProductActions, dispatch)

	const { loading, error } = useSelector((state: State) => state.products)

	const navigate = useNavigate()

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setProduct({ ...product, [e.currentTarget.name]: e.currentTarget.value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (product.name === "" || product.price <= 0) return

		// dispatch(productActions.createNewProduct(product))
		createNewProduct(product)

		navigate("/")
	}

	console.log({ product })

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'> Add new product</h2>

						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label>Product name</label>
								<input
									type='text'
									placeholder='Name'
									name='name'
									value={product.name}
									onChange={handleChange}
									className='form-control'
								/>
							</div>

							<div className='form-group'>
								<label>Product price</label>
								<input
									type='number'
									placeholder='Price'
									name='price'
									value={product.price}
									onChange={handleChange}
									className='form-control'
								/>
							</div>

							<button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
								Add
							</button>
						</form>
						{loading && <p className='alert alert-info p2 mt-4 text-center'>Cargando...</p>}
						{error && <p className='alert alert-danger p2 mt-4 text-center'>Error :(</p>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewProduct

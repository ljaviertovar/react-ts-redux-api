import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { State } from "../../../store/reducers/index"
import { bindActionCreators } from "redux"
import { ProductActions } from "../../../store"
import { useNavigate } from "react-router-dom"

const EditProduct = () => {
	const [productData, setproductData] = useState({ name: "", price: 0 })

	const { loading, error, productEdit } = useSelector((state: State) => state.products)

	const dispatch = useDispatch()
	const { editProduct } = bindActionCreators(ProductActions, dispatch)

	const navigate = useNavigate()

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setproductData({ ...productData, [e.currentTarget.name]: e.currentTarget.value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("aqui", productData)
		if (productData.name === "" || productData.price <= 0) return

		editProduct(productData)
		navigate("/")
	}

	useEffect(() => {
		if (productEdit) setproductData(productEdit)
	}, [productEdit])

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'> Edit product</h2>

						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label>Product name</label>
								<input
									type='text'
									placeholder='Name'
									name='name'
									className='form-control'
									value={productData.name}
									onChange={handleChange}
								/>
							</div>

							<div className='form-group'>
								<label>Product price</label>
								<input
									type='number'
									placeholder='Price'
									name='price'
									className='form-control'
									value={productData.price}
									onChange={handleChange}
								/>
							</div>

							<button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
								Save
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

export default EditProduct

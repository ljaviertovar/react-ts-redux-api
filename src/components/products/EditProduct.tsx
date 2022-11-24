import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { State } from "../../../store/reducers/index"

const EditProduct = () => {
	const [productData, setproductData] = useState({ name: "", price: 0 })

	const { productEdit } = useSelector((state: State) => state.products)

	useEffect(() => {
		if (productEdit) setproductData(productEdit)
	}, [productEdit])

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'> Edit product</h2>

						<form>
							<div className='form-group'>
								<label>Product name</label>
								<input type='text' placeholder='Name' name='name' className='form-control' value={productData.name} />
							</div>

							<div className='form-group'>
								<label>Product price</label>
								<input
									type='number'
									placeholder='Price'
									name='name'
									value={productData.price}
									className='form-control'
								/>
							</div>

							<button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
								Save
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditProduct

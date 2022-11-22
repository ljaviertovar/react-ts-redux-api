import { useDispatch, useSelector } from "react-redux"
import { createNewProduct } from "../../../store/actions"

const NewProduct = () => {
	const dispatch = useDispatch()

	const onSubmitHandler = e => {
		e.preventDefault()
		dispatch(createNewProduct())
	}

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'> Add new product</h2>

						<form onSubmit={onSubmitHandler}>
							<div className='form-group'>
								<label>Product name</label>
								<input type='text' placeholder='Name' name='name' className='form-control' />
							</div>

							<div className='form-group'>
								<label>Product price</label>
								<input type='number' placeholder='Price' name='name' className='form-control' />
							</div>

							<button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
								Add
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewProduct

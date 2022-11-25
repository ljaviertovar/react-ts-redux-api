import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"

import { ProductActions, State } from "../../../store"
import Product from "./Product"

const Products = () => {
	const dispatch = useDispatch()
	const { getProducts } = bindActionCreators(ProductActions, dispatch)

	const { products, loading, error } = useSelector((state: State) => state.products)

	useEffect(() => {
		getProducts()
	}, [dispatch])

	return (
		<>
			<h2 className='text-center my-5'>Product list</h2>

			{loading && <p className='alert alert-info p2 mt-4 text-center'>Cargando...</p>}
			{error && <p className='alert alert-danger p2 mt-4 text-center'>Error :(</p>}

			<table className='table table-striped'>
				<thead className='bg-primary table-dark'>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Price</th>
						<th scope='col'>Actions</th>
					</tr>
				</thead>
				<tbody>
					<>
						{products.length === 0 ? (
							<tr>
								<td colSpan={3} className='text-center'>
									There is not products!
								</td>
							</tr>
						) : (
							products.map(p => <Product product={p} key={p.id} />)
						)}
					</>
				</tbody>
			</table>
		</>
	)
}

export default Products

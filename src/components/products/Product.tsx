import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { Product as ProductType } from "../../../interfaces/product.interface"
import { ProductActions } from "../../../store"

interface Props {
	product: ProductType
}

const Product = ({ product }: Props) => {
	const dispatch = useDispatch()
	const { deleteProduct, editProduct } = bindActionCreators(ProductActions, dispatch)

	const navigate = useNavigate()

	const handleClickEdit = () => {
		editProduct(product)
		navigate(`/products/edit/${product.id}`)
	}

	const handleClickDelete = (id: number) => {
		if (confirm("Are you sure you want to delete this product?")) {
			deleteProduct(id)
		}
	}

	return (
		<tr>
			<td>{product.name}</td>
			<td>
				<span className='font-weight-bold'>${product.price}</span>
			</td>
			<td>
				<button type='button' className='btn btn-primary mr-2' onClick={() => handleClickEdit()}>
					Edit
				</button>

				<button type='button' className='btn btn-danger' onClick={() => handleClickDelete(product.id as number)}>
					Delete
				</button>
			</td>
		</tr>
	)
}

export default Product

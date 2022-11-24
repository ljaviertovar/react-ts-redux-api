import { Product } from "../../ts/interfaces/product.interface"
import ProductTypes from "../action-types/product-types"

export type ProductsState = {
	products: Product[]
	error: boolean
	loading: boolean
}

interface AddProduct {
	type: ProductTypes.ADD_PRODUCT
	payload: boolean
}

interface AddProductSuccess {
	type: ProductTypes.ADD_PRODUCT_SUCCESS
	payload: Product
}

interface AddProductError {
	type: ProductTypes.ADD_PRODUCT_ERROR
	payload: boolean
}

export type ProductAction = AddProduct | AddProductSuccess | AddProductError

export type DispatchType = (args: ProductAction) => ProductAction

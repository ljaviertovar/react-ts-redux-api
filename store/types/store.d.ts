import { Product } from "../../interfaces/product.interface"
import ProductTypes from "../action-types/product-types"

export type ProductsState = {
	products: Product[]
	error: boolean
	loading: boolean
	productDelete: number
	productEdit?: Product
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

interface StartGetProducts {
	type: ProductTypes.GET_PRODUCTS
	payload: boolean
}

interface GetProductsSuccess {
	type: ProductTypes.GET_PRODUCTS_SUCCESS
	payload: Product[]
}

interface GetProductsError {
	type: ProductTypes.GET_PRODUCTS_ERROR
	payload: boolean
}

interface DeleteProduct {
	type: ProductTypes.DELETE_PRODUCT
	payload: number
}

interface DeleteProductSuccess {
	type: ProductTypes.DELETE_PRODUCT_SUCCESS
}

interface DeleteProductError {
	type: ProductTypes.DELETE_PRODUCT_ERROR
	payload: boolean
}

interface deleteProduct {
	type: ProductTypes.DELETE_PRODUCT
	payload: number
}

interface EditProductSuccess {
	type: ProductTypes.EDIT_PRODUCT_SUCCESS
	payload: Product
}

interface EditProductError {
	type: ProductTypes.EDIT_PRODUCT_ERROR
	payload: boolean
}

interface SetEditProduct {
	type: ProductTypes.SET_EDIT_PRODUCT
	payload: Product
}

interface EditProduct {
	type: ProductTypes.EDIT_PRODUCT
	payload: boolean
}

export type ProductActions =
	| AddProduct
	| AddProductSuccess
	| AddProductError
	| StartGetProducts
	| GetProductsSuccess
	| GetProductsError
	| DeleteProduct
	| DeleteProductSuccess
	| DeleteProductError
	| SetEditProduct
	| EditProduct
	| EditProductSuccess
	| EditProductError

export type DispatchType = (args: ProductActions) => ProductActions

import productTypes from "../action-types/product-types"
import { ProductsState, ProductActions } from "../types/store"

const initialState: ProductsState = {
	products: [],
	error: false,
	loading: false,
	productDelete: 0,
	productEdit: undefined,
}

const reducer = (state: ProductsState = initialState, action: ProductActions): ProductsState => {
	switch (action.type) {
		case productTypes.ADD_PRODUCT:
		case productTypes.GET_PRODUCTS:
			return {
				...state,
				error: false,
				loading: action.payload,
			}
		case productTypes.ADD_PRODUCT_SUCCESS:
			return {
				...state,
				loading: false,
				products: [...state.products, action.payload],
			}
		case productTypes.ADD_PRODUCT_ERROR:
		case productTypes.GET_PRODUCTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		case productTypes.GET_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			}

		case productTypes.DELETE_PRODUCT:
			return {
				...state,
				productDelete: action.payload,
			}
		case productTypes.DELETE_PRODUCT_SUCCESS:
			return {
				...state,
				productDelete: 0,
				products: state.products.filter(p => p.id !== state.productDelete),
			}
		case productTypes.DELETE_PRODUCT_ERROR:
			return {
				...state,
				productDelete: 0,
				error: true,
			}
		case productTypes.EDIT_PRODUCT:
			return {
				...state,
				productEdit: action.payload,
			}
		default:
			return state
	}
}

export default reducer

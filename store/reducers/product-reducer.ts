import productTypes from "../action-types/product-types"
import { ProductsState, ProductAction } from "../types/store"

const initialState: ProductsState = {
	products: [],
	error: false,
	loading: false,
}

const reducer = (state: ProductsState = initialState, action: ProductAction): ProductsState => {
	switch (action.type) {
		case productTypes.ADD_PRODUCT:
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
			return {
				...state,
				loading: false,
				error: action.payload,
			}
		default:
			return state
	}
}

export default reducer

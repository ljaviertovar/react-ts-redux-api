import productTypes from "../action-types/product-types"

import axiosClient from "../../config/axios"
import { Product } from "../../ts/interfaces/product.interface"
import { Dispatch } from "redux"
import { ProductAction } from "../types/store"

export const createNewProduct = (product: Product) => {
	return async (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: productTypes.ADD_PRODUCT,
			payload: true,
		})

		try {
			await axiosClient.post("/products", product)

			dispatch({
				type: productTypes.ADD_PRODUCT_SUCCESS,
				payload: product,
			})
		} catch (error) {
			dispatch({
				type: productTypes.ADD_PRODUCT_ERROR,
				payload: true,
			})
		}
	}
}

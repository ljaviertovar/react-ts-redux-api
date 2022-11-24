import { Dispatch } from "redux"
import axiosClient from "../../config/axios"

import productTypes from "../action-types/product-types"
import { Product } from "../../interfaces/product.interface"

import { ProductActions } from "../types/store"

export const createNewProduct = (product: Product) => {
	return async (dispatch: Dispatch<ProductActions>) => {
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

export const getProducts = () => {
	return async (dispatch: Dispatch<ProductActions>) => {
		dispatch({
			type: productTypes.GET_PRODUCTS,
			payload: true,
		})

		try {
			const resp = await axiosClient.get("/products")
			dispatch({
				type: productTypes.GET_PRODUCTS_SUCCESS,
				payload: resp.data,
			})
		} catch (error) {
			dispatch({
				type: productTypes.GET_PRODUCTS_ERROR,
				payload: true,
			})
		}
	}
}

export const deleteProduct = (id: number) => {
	return async (dispatch: Dispatch<ProductActions>) => {
		dispatch({
			type: productTypes.DELETE_PRODUCT,
			payload: id,
		})

		try {
			await axiosClient.delete(`/products/${id}`)

			dispatch({
				type: productTypes.DELETE_PRODUCT_SUCCESS,
			})
		} catch (error) {
			dispatch({
				type: productTypes.DELETE_PRODUCT_ERROR,
				payload: true,
			})
		}
	}
}

export const editProduct = (product: Product) => {
	return async (dispatch: Dispatch<ProductActions>) => {
		dispatch({
			type: productTypes.EDIT_PRODUCT,
			payload: product,
		})
	}
}

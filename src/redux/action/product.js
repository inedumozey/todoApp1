import { actionTypes } from "./actionTypes";

export const setProductsAction=(products)=>{
    return {
        type: actionTypes.SET_ALL_PRODUCTS,
        payload: products
    }
}

export const setSelectedProductAction=(product)=>{
    return {
        type: actionTypes.SET_SELECTED_PRODUCT,
        payload: product
    }
}
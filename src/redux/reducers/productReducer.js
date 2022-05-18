import { actionTypes } from "../action/actionTypes";

const initProducts ={
    products: []
}
export const setProducts=(state=initProducts, {type, payload})=>{
    switch(type){
        case actionTypes.SET_ALL_PRODUCTS:
            return {...state, products:payload}
        break;

        default:
            return state
    }
}

const initSelectedProduct ={
    product: {}
}
export const setProduct=(state=initSelectedProduct, {type, payload})=>{
    switch(type){
        case actionTypes.SET_SELECTED_PRODUCT:
            return {...state, product:payload}
        break;

        default:
            return state
    }
}


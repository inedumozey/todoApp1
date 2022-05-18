import { actionTypes } from "./actionTypes";
const { INCREMENT, DECREMENT, RESET } =  actionTypes

export const incrementCounter =(val)=>{
    return {
        type: INCREMENT,
        payload: val
    }
}

export const decrementCounter =(val)=>{
    return {
        type: DECREMENT,
        payload: val
    }
}
export const resetCounter =()=>{
    return {
        type: RESET
    }
}
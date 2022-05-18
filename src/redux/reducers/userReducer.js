import { actionTypes } from "../action/actionTypes";

const initUser = "";

export const userReducer =(state=initUser, {type, payload})=>{
    switch(type){
        case actionTypes.USER:
            return state = payload
        default:
            return state
    }
}
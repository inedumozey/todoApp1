import { actionTypes } from "./actionTypes";

export const getUser=(user)=>{
    return {
        type: actionTypes.USER,
        payload: user.toUpperCase()
    }
}
import { actionTypes} from "../action/actionTypes";
const { INCREMENT, DECREMENT, RESET } = actionTypes

let initCount = 0;

export const counterReducer = (state=initCount, {type, payload})=>{
    switch(type){
        case INCREMENT: 
            return state + payload
        break;

        case DECREMENT: 
            
        return state >0 ? state - payload: state
        break;

        case RESET: 
        return initCount
        break;
        
        default: 
            return state
    }
}
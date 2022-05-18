import { actionTypes } from "../action/actionTypes";

const initState = {
    items: []
}

let id = 0
export const todoReducer =(state=initState, {type, payload})=>{
   switch(type){
        case actionTypes.ADD_TODO:
            id = id + 1
            return {
                ...state,
                items: state.items.concat(
                    {
                        id: id,
                        data: payload.data,
                        createdAt: new Date()
                    }
                )
            }
        break;
        
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(item=> item.id !== payload)
            }

        case actionTypes.UPDATE_TODO:
            const index = state.items.findIndex(item=>item.id===payload.id);
            if(index !== -1){
                 state.items[index] = {
                    ...state.items[index],
                    data: payload.data,
                    updatedAt: new Date()
                } 
                return state;              
            }
        break;
            
        default:
            return state  
   }
}

const initTodo = {
    item: {}
}
export function selectedTodoReducer(state=initTodo, {type, payload}){
    switch(type){
        case actionTypes.SELECTED_TODO:
            return {
                ...state,
                item: payload
            }

        default:
            return state;
    }
}

const initInput = "";
export const fetchFilteringInputReducer=(state=initInput, {type, payload})=>{
    switch(type){
        case actionTypes.FILTERINGINPUT:
            return state = payload.toLowerCase()
            
        default: 
            return state;
    }
}
import { actionTypes } from "./actionTypes";

export const addTodo =(todo)=>{
    return {
        type: actionTypes.ADD_TODO,
        payload: todo
    }
}

export const deleteTodo =(todoId)=>{
    return {
        type: actionTypes.DELETE_TODO,
        payload: todoId
    }
}

export const updateTodo =(todo)=>{
    return {
        type: actionTypes.UPDATE_TODO,
        payload: todo
    }
}

export const selectTodo =(todo)=>{
    return {
        type: actionTypes.SELECTED_TODO,
        payload: todo
    }
}

export const fetchFilteringInput =(input)=>{
    return {
        type: actionTypes.FILTERINGINPUT,
        payload: input
    }
}
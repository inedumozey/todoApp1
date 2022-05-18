import { actionTypes } from "./actionTypes";

export const toggleEditModal=()=>{
    return {
        type: actionTypes.TOGGLE_EDIT_MODAL
    }
}

export const toggleUserModal=()=>{
    return {
        type: actionTypes.TOGGLE_USER_MODAL
    }
}

export const toggleInputModal=()=>{
    return {
        type: actionTypes.TOGGLE_INPUT_MODAL
    }
}

export const toggleDetailModal=()=>{
    return {
        type: actionTypes.TOGGLE_DETAIL_MODAL
    }
}

export const isFilteringTodo =(input)=>{
    return {
        type: actionTypes.FILTER_TODO,
        payload: input
    }
}
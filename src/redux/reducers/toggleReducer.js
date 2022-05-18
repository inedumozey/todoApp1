import { actionTypes } from "../action/actionTypes";

const initEditModalState = false;

export const toggleEditModalReducer=(state=initEditModalState, {type})=>{
    switch(type){
        case actionTypes.TOGGLE_EDIT_MODAL:
            return !state
        default:
            return state
    }
}

const initInputModalState = false;

export const toggleInputModalReducer=(state=initInputModalState, {type})=>{
    switch(type){
        case actionTypes.TOGGLE_INPUT_MODAL:
            return !state
        default:
            return state
    }
}

const initDetailModalState = false;

export const toggleDetailModalReducer=(state=initDetailModalState, {type})=>{
    switch(type){
        case actionTypes.TOGGLE_DETAIL_MODAL:
            return !state
        default:
            return state
    }
}

const initUserModalState = false;

export const toggleUserModalReducer=(state=initUserModalState, {type})=>{
    switch(type){
        case actionTypes.TOGGLE_USER_MODAL:
            return !state
        default:
            return state
    }
}

const toggleFilterTodoState = false;

export const toggleFilterTodoReducer=(state=toggleFilterTodoState, {type, payload})=>{
    switch(type){
        case actionTypes.FILTER_TODO:
            return payload !== "" ? true : false
        default:
            return state
    }
}
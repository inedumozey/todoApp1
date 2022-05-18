import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { setProduct, setProducts } from "./productReducer";
import { themeReducer } from "./themeReducer";
import { todoReducer, selectedTodoReducer, fetchFilteringInputReducer } from "./todoReducer";
import { toggleEditModalReducer, toggleDetailModalReducer, toggleUserModalReducer, toggleInputModalReducer, toggleFilterTodoReducer } from "./toggleReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    setProducts,
    setProduct,
    counter: counterReducer,
    todos: todoReducer,
    selectedTodo: selectedTodoReducer,
    theme:themeReducer,
    isToggleEditModal: toggleEditModalReducer,
    isToggleUserModal: toggleUserModalReducer,
    isToggleInputModal: toggleInputModalReducer,
    isToggleDetailModal: toggleDetailModalReducer,
    isToggleFilteringTodo: toggleFilterTodoReducer,
    fetchFilteringInput: fetchFilteringInputReducer,
    user: userReducer, 
})
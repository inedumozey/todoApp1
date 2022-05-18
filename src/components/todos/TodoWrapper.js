import React, {useEffect} from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { useSelector } from 'react-redux';
import EditTodo from './EditTodo';
import TodoForm from './TodoForm';
import TodoDetail from './TodoDetail';
import Auth from './Auth';


function Todo() {
    const state = useSelector(state=>state)
    const { theme, isToggleEditModal, isToggleDetailModal, isToggleInputModal, isToggleUserModal } = state;

    return (
        <div style={{...styles.todoWrapper, background:theme.theme.hard}}>
            <Header />
            <Main />
            <Footer />

            {/* modal */}
            {
                isToggleEditModal ? <EditTodo /> : null
            }
            {
                isToggleInputModal ? <TodoForm /> : null
            }
            {
                isToggleDetailModal ? <TodoDetail /> : null
            }
            {
                isToggleUserModal ? <Auth /> : null
            }
        </div>

    );
}

const styles ={
    todoWrapper: {
        width:'100vw',
        minHeight:"100vh",
        maxWidth: "700px",
        position: 'relative',
        margin: 'auto',
    }
}

export default Todo;
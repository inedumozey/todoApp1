import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Btn from './Btn';
import MainHeader from './MainHeader';
import TodoListWrapper from './TodoListWrapper';
import { IoAddOutline } from 'react-icons/io5'
import { icons } from '../../styles/util';
import { toggleInputModal, toggleUserModal } from '../../redux/action/toggle';

function Main() {
    const state = useSelector(state=>state)
    const { theme, user } = state

    const dispatch = useDispatch()

    function openTodoForm(){
        dispatch(toggleInputModal())
    }
    function showUserModal(){
        dispatch(toggleUserModal())
    }

    return (
        <div style={{...styles.main, background: theme.theme.warmth}}>
          <MainHeader />
          <TodoListWrapper />
          <Btn

            onClick={ user ==""? ()=>showUserModal() : ()=>openTodoForm()}
            style={{...icons.iconWrapper, ...styles.btn, background: user=="" ? theme.theme.brand_8 : theme.theme.natural_products}}>
             <IoAddOutline  style={{...icons.icon, color: user=="" ? theme.theme.natural_products : theme.theme.wine}}/> 
          </Btn>
        </div>
    );
}

const styles = {
    main:{
        minHeight: "calc(100vh - 120px - 60px)",
        borderRadius: "35% 35% 0 0",
        padding:'20px 8px 5px 8px',
        position:'relative'
    },
    btn: {
        borderRadius:"50%",
        border: "none",
        boxShadow: "2px 2px 3px #ccc, -2px -2px 3px #ccc",
        position: "absolute",
        right:"20px",
        top:"100px",
    }
}

export default Main;
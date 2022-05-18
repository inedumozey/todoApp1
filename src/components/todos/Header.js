import React from 'react';
import { IoCartOutline, IoFolderOpenOutline, IoMenuOutline, IoPersonOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux';
import { toggleUserModal } from '../../redux/action/toggle';
import { icons } from '../../styles/util';

function Header() {
    const state = useSelector(state=>state)
    const { theme, todos, user } = state
    const dispatch = useDispatch()

    function showUserModal(){
        dispatch(toggleUserModal())
    }

    return (
        <div style={{...styles.header, background:theme.theme.hard}}>
            <div onClick={()=>showUserModal()} style={{...icons.iconWrapper}}>
                <IoMenuOutline style={{...icons.icon, color: user ==""? theme.theme.brand_8 : theme.theme.beauty}}/>
            </div>

            <div style={{...styles.user, color: theme.theme.beauty, borderColor: theme.theme.portfolio_website}}>
                {
                    user ? 
                    (
                        <>
                            <IoPersonOutline style={{...icons.icon, color:theme.theme.natural_products}}/>
                            <div style={{...styles.name}}>{user}</div>
                        </>
                    ):
                    (
                        <div style={{...styles.name}}>No Active User</div>
                    )
                }
                <div style={{...styles.status, background: user ? theme.theme.online : theme.theme.offline}}></div>
            </div>

            <div style={{...styles.title, color: theme.theme.wine}}>TODO APP</div>

            <div style={{...icons.iconWrapper}}>
                <IoFolderOpenOutline style={{...icons.icon, color:theme.theme.beauty}}/>
                <div style={{...styles.msg, color: theme.theme.brand_8}}>{ todos.items.length }</div>
            </div>
        </div>
    );
}

export const  styles ={
    header: {
        height: '120px',
        padding:'10px',
        display: "flex",
        justifyContent: "space-between",
        position: 'relative',
        userSelect: "none",
    },
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        flex:1,
        alignSelf: "flex-end"
    },
    msg:{
        fontSize: "13px",
        fontWeight: "bold",
        position:"absolute",
        top:"0px",
        right:"0px"
    },
    user: {
        position: "absolute",
        top: '10px',
        right: '20%',
        display:'flex',
        justifyContent: "center",
        alignItems: "center",
        border:"1px solid",
        padding:"2px",
        borderRadius: "5px"
    },
    name: {
        margin: "0 5px",
    },
    status: {
        width: '10px',
        height: '10px',
        borderRadius: "50%"
    }

}

export default Header;
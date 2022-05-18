import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Btn from './Btn';
import { icons, } from '../../styles/util';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5'
import { deleteTodo, selectTodo } from '../../redux/action/todo';
import { toggleEditModal, toggleDetailModal } from '../../redux/action/toggle'


function FilterTodo({item}) {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const { theme } = state

    const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const listRef = useRef(null)
    
    function openEditModal(todo){
        dispatch(selectTodo(todo))
        dispatch(toggleEditModal())

    }
    function handleDel(todo){
        dispatch(deleteTodo(todo.id))
    }

    function getDate(msg, date){
        return `${msg}: ${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    function ellipsis(data, n){        
        return data.length > n ? (data.split('').slice(0, n)).join("") + "..." :  data
    }
    function mouseEnter(){
        listRef.current.style.opacity = '.5'
    }
    function mouseLeave(){
        listRef.current.style.opacity = '1'
    }

    function showDetail(todo){
        dispatch(toggleDetailModal())
        dispatch(selectTodo(todo))
    }
    return (
        <div
            ref={listRef} 
            style={{...styles.list, background: theme.theme.natural_products}}>

            <div
                onMouseEnter={()=>mouseEnter()}
                onMouseLeave={()=>mouseLeave()}
                onClick={()=>{showDetail(item)}}
                style={{...styles.dataWrapper}}
                >
                <span style={{...styles.data, color: theme.theme.modern_business, borderBottomColor: theme.theme.brand_6}}>{ellipsis(item.data, 20)}</span>
                <div style={{...styles.itemDate}}>
                    <span style={{...styles.span, borderLeftColor: theme.theme.brand_1}}>{getDate("Created", item.createdAt)}</span>
                    {item.updatedAt ? <span style={{...styles.span, borderLeftColor: theme.theme.brand_1}}>{getDate("Updated", item.updatedAt)}</span> : null}
                </div>
            </div>
            <div style={{...styles.btnWrapper}}>
                <Btn onClick={()=>openEditModal(item)} style={{...icons.iconWrapper, ...styles.btn, background: theme.theme.natural_products}}>
                    <IoCreateOutline style={{...icons.icon, ...styles.icon, color: theme.theme.brand_3}}/>
                </Btn>
                <Btn onClick={()=>handleDel(item)} style={{...icons.iconWrapper, ...styles.btn, background: theme.theme.natural_products}}>
                    <IoTrashOutline style={{...icons.icon, ...styles.icon, color: theme.theme.brand_8}}/>
                </Btn>
            </div>
        </div>
    );
}

const styles = {
   list: {
        padding: '10px',
        margin:"10px auto",
        width:"90%",
        boxShadow: "2px 2px 3px #ccc, -2px -2px 3px #ccc",
        display: 'flex',
        alignItems: 'flex-end'
   },
   data: {
        padding: '2px',
        display: 'inline-block',
        borderBottom: "1px solid",
        marginBottom: "10px",
        fontWeight: "bold"
   },
   dataWrapper: {
    flex: 1,
    cursor: "pointer"
   },
   span: {
        borderLeft: "3px solid",
        padding:'2px',
        marginRight: '5px',
        borderRadius: "0 0 0 5px"
   },
   itemDate: {
       fontSize: "9px",
   },
   btnWrapper: {
       display: "flex",
   },
   btn: {
        borderRadius:"50%",
        border: "none",
        margin:"5px",
        boxShadow: "2px 2px 3px #ccc, -2px -2px 3px #ccc",
    },
    icon: {
        fontSize: "15px",
    }
}

export default FilterTodo;
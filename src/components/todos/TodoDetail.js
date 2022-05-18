import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDetailModal } from '../../redux/action/toggle';
import Modal from './Modal';

function TodoDetail() {
    
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const { theme, selectedTodo } = state
    const {item} = selectedTodo

    const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Sat"];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

    function getDate(msg, date){
        return `${msg}: ${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]}, ${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    function closeModal(){
        dispatch(toggleDetailModal())
    }

    return (
    <Modal onClick={()=>closeModal()}>
        <div style={{...styles.list, background: theme.theme.natural_products}}>
            <div style={{...styles.dataWrapper}}>
                <div style={{...styles.data, color: theme.theme.modern_business, borderBottomColor: theme.theme.brand_6}}>{item.data}</div>
                <div style={{...styles.itemDate}}>
                    <span style={{...styles.span, borderLeftColor: theme.theme.brand_1}}>{getDate("Created", item.createdAt)}</span>
                    {item.updatedAt ? <span style={{...styles.span, borderLeftColor: theme.theme.brand_1}}>{getDate("Updated", item.updatedAt)}</span> : null}
                </div>
            </div>
        </div>
    </Modal>
    );
}

const styles = {
    list: {
         padding: '10px',
         margin:"10px auto",
         width:"95%",
    },
    data: {
         padding: '2px',
         borderBottom: "1px solid",
         marginBottom: "10px",
         fontWeight: "400"
    },
    dataWrapper: {
     flex: 1
    },
    span: {
         borderLeft: "3px solid",
         padding:'2px',
         marginRight: '5px',
         borderRadius: "0 0 0 5px"
    },
    itemDate: {
        fontSize: "9px",
        display: "flex",
        justifyContent: "space-between"
    },
 }

export default TodoDetail;
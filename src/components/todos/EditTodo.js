import React, {useState, useRef, useEffect} from 'react';
import Modal from './Modal';
import Btn from './Btn';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleEditModal } from '../../redux/action/toggle';
import { updateTodo } from '../../redux/action/todo';



function EditTodo() {
    const state = useSelector(state=>state)
    const { theme, selectedTodo } = state
    const dispatch = useDispatch()

    const [ input, setInput ] = useState('')
    const [ val, setVal ] = useState(selectedTodo.item.data)

    function closeModal(){
        dispatch(toggleEditModal())
    }
    function getInput(e){
        setInput(e.target.value);
        setVal(e.target.value)
    }
    function handleEdit(e){
        e.preventDefault();
        
        if(input !==''){
            dispatch(updateTodo({
                ...selectedTodo.item,
                data: input,
            }))
            dispatch(toggleEditModal())
        }
    }
    
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return (
        <Modal onClick={()=>closeModal()}>
            <div style={{...styles.form}}>
            <div style={{...styles.title, color:theme.theme.natural_products,}}>UPDATE TODO</div>

                <form onSubmit={(e)=>handleEdit(e)} style={{...styles.formGroup}}>
                    <input
                        style={{...styles.input, }}
                        value={val || ""}
                        onChange={(e)=>getInput(e)}
                        ref= {inputRef}
                    />
                    <Btn style={{...styles.btn, color:theme.theme.natural_products, background:theme.theme.wine}}>UPDATE</Btn>
                </form>
            </div>
        </Modal>
    );
}

const styles = {
    form: {
        display: 'flex',
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin:'auto',
        padding: '10px',
        width:"100%",
    },
    title: {
        fontWeight: 'bold',
        padding: '10px'
    },
    formGroup: {
        width:"100%",
        borderRadius: '7px'
    },
    input: {
        padding:"13px",
        width: '80%',
        border:"none",
    },
    btn: {
        padding:'13px',
        width:'20%',
        border:"none",
        fontWeight: 'bold',
        borderRadius: '0 7px 7px 0',
        cursor: "pointer"
    }
}
export default EditTodo;
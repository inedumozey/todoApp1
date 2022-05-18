import React, {useState, useRef, useEffect} from 'react';
import Modal from './Modal';
import Btn from './Btn';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleInputModal } from '../../redux/action/toggle';
import { addTodo } from '../../redux/action/todo';

function TodoForm() {
    const [ input, setInput ] = useState('')

    const state = useSelector(state=>state)
    const { theme } = state
    const dispatch = useDispatch()

    function closeModal(){
        dispatch(toggleInputModal())
    }
    function handleSave(e){
        e.preventDefault();
        
        if(input !==''){
            dispatch(addTodo({
                data: input,
            }))
            dispatch(toggleInputModal())
        }
    }

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return (
        <Modal onClick={()=>closeModal()}>
            <div style={{...styles.form}}>
                <div style={{...styles.title, color:theme.theme.natural_products,}}>ADD TODO</div>
                <form onSubmit={(e)=>handleSave(e)} style={{...styles.formGroup}}>
                    <input
                        style={{...styles.input, }}
                        ref={inputRef}
                        onInput={(e)=>setInput(e.target.value)}
                    />
                    <Btn style={{...styles.btn, color:theme.theme.natural_products, background:theme.theme.wine}}>SAVE</Btn>
                </form>
            </div>
        </Modal>
    );
}

const styles = {
    form: {
        display: 'flex',
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        margin:'auto',
        padding: '10px',
        height: '100px',
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
export default TodoForm;
import React, {useState, useRef, useEffect} from 'react';
import Modal from './Modal';
import Btn from './Btn';
import { useSelector, useDispatch  } from 'react-redux';
import { toggleUserModal } from '../../redux/action/toggle';
import { getUser } from '../../redux/action/user';

function Auth() {
    const state = useSelector(state=>state)
    const { theme, user } = state
    const dispatch = useDispatch()

    const [ input, setInput ] = useState('')

    function closeModal(){
        dispatch(toggleUserModal())
    }
    function getInput(e){
        setInput(e.target.value);
    }
    function saveName(e){
        e.preventDefault();
        
        dispatch(getUser(input))
        dispatch(toggleUserModal())
        
    }
    
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus()
    }, [])

    return (
        <Modal onClick={()=>closeModal()}>
            <div style={{...styles.form}}>
            <div style={{...styles.title, color:theme.theme.natural_products,}}>WHAT'S YOUR NAME?</div>

                <form onSubmit={(e)=>saveName(e)} style={{...styles.formGroup}}>
                    <input
                        style={{...styles.input, }}
                        onInput={(e)=>getInput(e)}
                        ref= {inputRef}
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
export default Auth;
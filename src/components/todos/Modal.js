import React from 'react';
import { useSelector } from 'react-redux';
import Btn from './Btn';
import { IoClose } from 'react-icons/io5'
const Close = IoClose

function Modal({children, onClick}) {
    const state = useSelector(state=>state)
    const { theme } = state

    return (
        <div style={{...styles.modal}}>
            <div style={{...styles.content, }}>
                {children}
                <Btn onClick={()=>{ onClick() }} style={{...styles.cancel, color:theme.theme.natural_products}}>
                    <Close />
                </Btn>
            </div>
        </div>
    );
}
const styles = {
    modal: {
        position: "absolute",
        top:0,
        right:0,
        left:0,
        bottom:0,
        background: "rgba(0,0,0,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "Center",
    },
    content: {
        width: '80%',
        minHeight: "200px",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        background: "rgba(0,0,0,.2)",
    },
    cancel: {
        position:"absolute",
        right: -12,
        fontSize: '18px',
        top: -12,
        background: "transparent",
        padding: "10px",
    }
}

export default Modal;
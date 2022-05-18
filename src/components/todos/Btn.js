import React, {useRef} from 'react';

function Btn({children, onClick, onMouseDown, onMouseUp, style}) {
    const btnRef = useRef(null)

    function addFocus(){
        btnRef.current.style.opacity = ".1"
        btnRef.current.style.transition = ".1s"
    }
    function removeFocus(){
        btnRef.current.style.opacity = "1"
        btnRef.current.style.transition = ".1s"
    }

    return (
        <button
            ref={btnRef}
            style={{...styles.btn, ...style}}
            onClick={()=> onClick ? onClick() : {}}
            onMouseDown={()=> onMouseDown ? onMouseDown() : addFocus()}
            onMouseUp={()=> onMouseUp ? onMouseUp() : removeFocus()}
            
        >
            {children}
        </button>
    );
}
const styles = {
    btn: {
        background:"skyBlue",
        userSelect: "none",
        cursor: 'pointer',
        border: "none"

    }
}

export default Btn;
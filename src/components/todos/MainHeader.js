import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoSearch } from 'react-icons/io5'
import { isFilteringTodo, toggleUserModal } from '../../redux/action/toggle';
import { fetchFilteringInput } from '../../redux/action/todo';

function MainHeader() {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    const { theme, user } = state

    function filterItem(input){
        dispatch(isFilteringTodo(true))
        dispatch(fetchFilteringInput(input))
        if(input === ""){
            dispatch(isFilteringTodo(false))
            dispatch(fetchFilteringInput(""))
        }
    }

    const userRef = useRef(null)
    function mouseEnter(){
        userRef.current.style.opacity = '.5'
    }
    function mouseLeave(){
        userRef.current.style.opacity = '1'
    }
    
    function showUserModal(){
        dispatch(toggleUserModal())
    }


    return (
        <div style={{...styles.mainHeader, color:theme.theme.fashion, background:theme.theme.natural_products}}>
            {
                user ? 
                    <h3 style={{...styles.title}}>What's Up {user}!</h3> :
                    <h3
                        style={{
                            ...styles.title,
                            cursor: "pointer",
                        }}
                        onMouseEnter={()=>mouseEnter()}
                        onMouseLeave={()=>mouseLeave()}
                        onClick={()=>{showUserModal()}}
                        ref={userRef}

                    >Please add up a name</h3>
            }
            <div style={{...styles.formGroup, borderColor:theme.theme.fashion}}>
                <div style={{...styles.search}}>
                    <IoSearch style={{...styles.icon, color:theme.theme.fashion}}/>
                </div>
                <input
                    style={{...styles.input}}
                    placeholder="Search"
                    type="text" 
                    onInput={(e)=>filterItem(e.target.value)}
                />
            </div>
        </div>
    );
}

const styles = {
    mainHeader: {
        height: "100px",
        margin:'10px auto',
        borderRadius: "30% 30% 0 0",
        width:"70%",
        padding:"10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        userSelect: "none"
    },
    title: {
        fontSize: "25px",
        fontWeight: 'bold',
        textAlign: "center",
    },
    formGroup: {
        width:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        border: "1px solid",
        borderRadius: '40px'
    },
    input: {
        width: "85%",
        height: "35px",
        border: "none",
        borderRadius: "0 40px 40px 0",
        padding: " 0 10px"
    },
    icon: {
        fontSize: '30px',
    },
    search: {
        width: '15%',
        padding: '10px',
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: "40px 0 0 40px"
    }
    
}

export default MainHeader;
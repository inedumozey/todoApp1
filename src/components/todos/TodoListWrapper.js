import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import FilterTodo from './FilterTodo';
import TodoList from './TodoList';

function TodoListWrapper() {
    const [ isLoading, setIsLoading ] = useState(false)
    const state = useSelector(state=>state)
    const { todos, fetchFilteringInput, isToggleFilteringTodo } = state
    const items = todos.items

    isLoading ? console.log("isLoading...") : console.log("loading completed")
    
    const filteredItems = items.filter(item=>{
        const data = item.data.split('').join("").toLowerCase();
        return data.includes(fetchFilteringInput)
    })

    return (
        <div style={{...styles.todoContent}}>

            {
                isToggleFilteringTodo ? 
                (
                    filteredItems.map(item=>(
                        <div key={item.id}>
                            <TodoList item={item}/>                            
                        </div>
                    ))
                ):
                (
                    items.map(item=>(
                        <div key={item.id}>
                            <TodoList item={item}/>                            
                        </div>
                    ))
                )
            }
            {
                items.length > 0 ? null : <div style={{textAlign: "center"}}>There are no Todos!</div>
                
            }
            
        </div>
    );
}

const styles = {
    todoContent: {
         height: '353px',
         overflow: 'auto'
    }
}
export default TodoListWrapper;
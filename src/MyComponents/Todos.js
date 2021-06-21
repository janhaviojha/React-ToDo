import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    let myStyle={
        minHeight: "100vh",
       // margin:"40px"
       //backgroundImage:"url(/public/backgroundimg.jpg)"
    }
    return (
        <div style={{ backgroundImage: "url(/todosbackgroundimg.jpg)", height:"100%" }}>
  
        <div className="container" style={myStyle}>
            {props.todoitems.length!==0? 
            <h3 className="text-center my-3">My Todos List</h3>:
            <h3 className="text-center">Your Todos will appear here once added</h3>
            }
            {props.todoitems.length===0? 
            <h3></h3>:
            props.todoitems.map((todo)=>{
                return(
                <>
                <hr></hr>
                 <TodoItem todoitem={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>
                 
                 </>
                );
                
            })}
            
           
        </div>
        </div>
    )
} 

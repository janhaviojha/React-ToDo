import React from 'react'

export const TodoItem = (props) => {
    
    return (
        <div>
        
           <h4>{props.todoitem.title}</h4>
           <p>{props.todoitem.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todoitem)}}>Delete</button>
           
    
        </div>
    )
}

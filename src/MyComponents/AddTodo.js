import React from 'react'
import {useState} from 'react';

export const AddTodo = (props) => {
  let myStyle={
    minHeight:"100vh"
  }
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [sno,setsno]=useState("");
  const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
        alert("Title or Description cannot be blank");
      }
      else{
      props.addTodo(title,desc)  
      settitle("");
      setdesc("");
      setsno("");
      }
  }

    return (
<div className="container" style={myStyle}>
<h3 className= "text-center" my-3>Add a Todo</h3>
    <form onSubmit={submit}>
  <div className="form-group">
    <label for="Todo">Todo</label>
    <input type="text" className="form-control" id="Todo" value={title} onChange={(e)=> settitle(e.target.value)} aria-describedby="emailHelp" placeholder="Enter new task"/>
    
  </div>

  <div className="form-group">
    <label for="Description">Description</label>
    <input type="text" className="form-control" id="description" value={desc} onChange={(e)=> setdesc(e.target.value)} placeholder="Tell us more about what needs to be done"/>
  </div>

  
  
  <button type="submit" className="btn btn-success">Add</button>
    </form>
</div>

)}

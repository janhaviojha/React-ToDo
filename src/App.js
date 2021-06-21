
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import {TodoItem} from './MyComponents/TodoItem';
import {AddTodo} from './MyComponents/AddTodo'
import React, { useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {About} from './MyComponents/About'

function App() {
  let initTodo=[];
  if(localStorage.getItem("todoitemsarr")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todoitemsarr"));
  }
  
  const [todoitemsarr, setTodoitemsarr] = useState(initTodo);

  //delete this way wont work in react
    const onDelete=(todoitem)=>{
      //let index=todoitemsarr.indexOf(todoitem);
      //todoitemsarr.splice(1,1,todoitem);
      setTodoitemsarr(todoitemsarr.filter((e)=>{
        return e!==todoitem;
    }))
      localStorage.getItem("todoitemsarr");
    //localStorage.setItem("todoitemsarr")
      console.log("deleted",todoitem);
  }
  
  const addTodo=(title,desc)=>{
    let newTodo={};
    if(todoitemsarr.length>0){
    let sno=todoitemsarr[todoitemsarr.length-1].sno+1;
     newTodo={
      sno: sno,
      title:title,
      desc: desc,
    }
  }
  else{
    
     newTodo={
      sno: 1,
      title:title,
      desc: desc,
    }
    
  }
    setTodoitemsarr([...todoitemsarr,newTodo]);
    alert("Your Todo was succesfully added!")
    console.log("Added ",newTodo);
  }
  
  useEffect(()=>{
    localStorage.setItem("todoitemsarr",JSON.stringify(todoitemsarr));
  },[todoitemsarr])
  return (
    <div style={{ backgroundImage: "url(/todosbackgroundimg.jpg)", height:"100%" }}>
    <>
    
    <Router>
    <Header title="Todos List" searchBar={false} ></Header>
    <Switch>
         
          <Route exact path="/" render={()=>{
            return(
            <>
            <Todos todoitems={todoitemsarr}  onDelete={onDelete}></Todos>
            </>
            
            );
          }}>
          
         </Route>
         
         <Route exact path="/home" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo}></AddTodo>
            
            </>
            );
          }}>
         </Route>
          <Route exact path="/about">
          <About/>
          </Route>
        </Switch>
    <Footer></Footer>
    </Router>
    </>
    
    </div>
  );
}

export default App;

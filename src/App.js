import React,{useState} from "react";

import Todolist from "./todolist"

import "./index.css"

const App=()=>{
  const [task,setTask]=useState("")
 const [todos,setTodos]=useState([])
 const changeHandler=event=>{
  setTask(event.target.value)
 }
 const submitHandler=event=>{
  event.preventDefault() 
  console.log(task)
  const newTodos=[...todos,task]
  setTodos(newTodos)
  console.log(newTodos)
  setTask("")
 }
 const deleteHandler=(indexValue)=>{
  const newTodosfiltered=todos.filter((todo,index)=>index!==indexValue)
  setTodos(newTodosfiltered)
 }
  return(
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">To do Management Application</h1>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" placeholder="enter the task" value={task} onChange={changeHandler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" className="AddBtn" />
            </form>
         <Todolist todos={todos} deleteHandler={deleteHandler} />
          </div> 
        </div>
      </center>
    </div>
  )
}
export default App
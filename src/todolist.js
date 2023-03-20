import React from 'react';
import "./App.css"
// eslint-disable-next-line 
const Todolist = ({todos,deleteHandler}) => {

   
  return (
    <div>
      {todos.map((todo,index)=>
      <div key={index}>
        <h1>{todo}&nbsp;<button className='delBtn' onClick={()=>deleteHandler(index)}>Delete</button></h1>
      </div>
      )}
    </div>
  );
}

export default Todolist;

import React from 'react'
import {useState} from 'react'

const ToDoComp = () => {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "20:30",
    },
  ]);

  
  const ToDo = (props) => {
    <tr>
      <td>
        <label>{todos.id}</label>
      </td>
      <td>
        <input></input>
      </td>
      <td>
        <label>{todos.createdAt}</label>
      </td>
    </tr>
  }  
  
  const reverseOrder = () => {
    // Reverse is a mutative operation so we need to create a new array first.
    setTodos([...todos].reverse());
  };
  
  
  
  // First example with keys, show browser control to see the warning
  return (
    <div>
    <button onClick={reverseOrder}>Reverse</button>
    <table style={{border: "2px solid black", margin: "30px"}}>
      <tbody >
        {todos.map((todo, index)=>{
      <ToDo  key={index} id={todo.id} createdAt={todo.createdAt}/>

        })}
      </tbody>
    </table>
    </div>
  )
}

export default ToDoComp
import React from 'react'
import { Todoitem } from "../My Components/Todoitem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3>Todos List</h3>
      {/* {props.todos} */}
      <Todoitem todo={props.todos[0]}/>
    </div>

  )
}

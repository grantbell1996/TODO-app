import React from 'react'
import './Todo.css'

function Todo(props) {
  return (
    <div className='todo__list'> 
    <li>{props.text}</li>
    </div>
  )
} 

export default Todo;
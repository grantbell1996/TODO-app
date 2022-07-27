import React from 'react'
import './Todo.css'
import db from './firebase'

function Todo(props) {
  return (
    <div className='todo__list'> 
    <li className='todo'>{props.todo.todo}</li>
    <button className="delete_button" onClick={event => db.collection('todos').doc(props.todo.id).delete()}>delete me</button>
    </div>
  )
} 

export default Todo;
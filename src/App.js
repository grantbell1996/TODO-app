import React, { useState, useEffect } from "react";
import Todo from './Todo';
import "./App.css";
import db from './firebase'
import firebase from "firebase/compat/app";
import todoHeader from "./images/todo_header.png";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //snapshot is taking a "snapshot" of the database, then mapping through the docs (the individual objects in the database)
      //then grabbing the objects with the key "todo" and setting to the todo array in the above useState
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //stops the page from refreshing so we dont lose the current state

    db.collection('todos').add({
      todo: input, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }) //because you passed 'todos' to db.collection in the above useeffect, a snapshot of the db is now triggered when the input is changed


    setInput(''); //setting the input back to an empty string to clear the form
  };

  return (
    <div className="App">
      <img className="header" src={todoHeader}></img>
      
      <div className="todo_body"> 
      <form>
        <input
        className="todo_field"
        placeholder="write a todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="todo_button" type="submit" onClick={addTodo}>add todo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
      </div>

    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["take dogs for a walk", "go to jim"]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault(); //stops the page from refreshing so we dont lose the current state
    setTodos([...todos, input]); //the array includes a spread of the current state of todos and pushes the value of the input field to the current array
    setInput(''); //setting the input back to an empty string to clear the form
  };

  return (
    <div className="App">
      <h1>hello me</h1>
      <form>
        <input
        placeholder="write a todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>add todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;

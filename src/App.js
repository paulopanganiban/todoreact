import './App.css';
import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Throw the rubbish out']);
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    event.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Write a task</InputLabel>
          <Input  value={input} onChange={event => { setInput(event.target.value) }} type="text" />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>


      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;

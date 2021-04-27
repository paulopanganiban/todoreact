import './App.css';
import React, { useEffect, useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './components/Todo';
import db from './firebase'
import firebase from 'firebase'
function App() {
  const [todos, setTodos] = useState(['']);
  const [input, setInput] = useState('')

  useEffect(() => {
    // when app js loads, this fires
  
   db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => doc.data().todo))
   })
  }, [])

  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }
  return (
    <div className="App">
      <h1>2:03:01</h1>
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

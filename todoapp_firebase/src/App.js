import {useState, useEffect} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'

function App() {
  //State for todos, which we later map to list it out
  const [todos, setTodos] = useState([]); 

  //State for input
  const [input, setInput] = useState('');
  console.log(input);

  //when the app loads, we need to listen to the database and fetch new todos as they get added amd removed
  //for this we use a hook called useEffect

  useEffect(() => {
    //this code fires up when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})));
    })
    
  }, []);

  const addTodo = (event) => {
    //this will trigger the add todo button

    event.preventDefault(); //prevents refreshing page when submit
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    console.log('im working');
    setInput('');

  }
  return (
    <div className="App">
    <h1>A fully functional TODO App!</h1>
    <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} Button variant="contained" color="primary">
          Add Todo
      </Button>
    </form>
    

    <ul>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </ul>
    </div>
  );
}

export default App;

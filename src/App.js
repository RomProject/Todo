import React from 'react'
import { useState } from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import List from './components/List'
import Title from './components/Title'


export default function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isDisabled, setisDisabled] = useState(false)
  const [inputValue, setinputValue] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
    setinputValue("")
  }

  const del = function deleteTodo(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>

      <Title />

      <form className="form" onSubmit={handleSubmit}>
        <TextField onChange={(e) => {
          setinputValue(e.target.value)

          const result = todos.reduce((result, todo) => todo.text === e.target.value ? result + 1 : result, 0)

          if (result > 0) {
            setisDisabled(true)
            alert("Task already exsists!")
          } else {
            setisDisabled(false)
          }

          setTodo(e.target.value)
        }} id="standard-basic" label="Add Todo" value={inputValue} type="text" required />
        <Button disabled={isDisabled} variant="contained" color="primary" type="submit" id="btn">Add Task</Button>
      </form>
      <List todos={todos} todo={todo} setTodos={setTodos} del={del} />

    </div>
  )
}

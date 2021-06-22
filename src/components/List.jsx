import React from 'react'
import Todo from './Todo'
import {useEffect} from 'react'

export default function List({todos,setTodos,del}) {
 

    useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
          setTodos(loadedTodos);
        }
      }, []);
      useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
      }, [todos]);
    

    return (

        
        <div className="list">
           

        <h1 id="head-todo">MY-TASKS</h1>
            {todos.map(todo=><Todo  todo={todo}   key={todo.id} del={del}/>)}
        </div>
    )
}

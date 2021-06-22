import React from 'react'
import { Button } from '@material-ui/core'

export default function Todo({ todo, del }) {


    return (
        <div className="todos">
            <h1>{todo.text}</h1>
            <Button size="small" variant="contained" color="secondary" onClick={() => del(todo.id)} >Delete</Button >
        </div>
    )
}

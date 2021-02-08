import React from 'react'

export default function Hooks9-ToDo({todo}) {
    return (
        <div>
            <span style={{color:todo.complete ? '#AAA':'#000'}}>
                {todo.name}</span>
        </div>
    )
}

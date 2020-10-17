import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  
  const hendleTodoClick = () => {
      toggleTodo(todo.id)
  }

  return (
    <div className="todoAndCheckbox">
      <div className="todo">
        <div className="x">X</div>
        {todo.name}
        <input type="checkbox" checked={todo.complete} onChange={hendleTodoClick} />
      </div> 
    </div>
  )
}

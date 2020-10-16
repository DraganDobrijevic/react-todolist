import React from 'react'

export default function Todo({ todo, toggleTodo }) {
  
  const hendleTodoClick = () => {
      toggleTodo(todo.id)
  }

  return (
    <div>
      <label className="todo">
        <input type="checkbox" checked={todo.complete} onChange={hendleTodoClick} />
        {todo.name}
      </label>        
    </div>
  )
}

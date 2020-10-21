import React from 'react'

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  
  const hendleTodoClick = () => {
    console.log('cekiranje');
    toggleTodo(todo.id);
  }

  const hendleDeleteTodo = () => {
    console.log("brisanje");
    deleteTodo(todo.id);
  }

  return (
    <div className="todo">
      <div onClick={hendleDeleteTodo} className="x">X</div>
      {todo.name}
      <input type="checkbox" checked={todo.complete} onChange={hendleTodoClick} />
    </div> 
  )
}

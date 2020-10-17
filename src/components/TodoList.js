import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
  return (
    <div className="todoList">
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      })}
      <h4>{todos.filter(todo => !todo.complete).length} left to do</h4>
    </div>
  )
}

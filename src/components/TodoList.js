import React, { useState, useEffect } from 'react'
import Todo from './Todo'

import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

export default function TodoList({ todos, toggleTodo, deleteTodo, setTodos }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (todos.length >= 1) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }, [todos])

  const clearTodosHandler = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  
  return (
    <div className="todoList">
    <TransitionGroup>
      {todos.map(todo => (
        <CSSTransition
          key={todo.id}
          timeout={500}
          classNames="todoAnim"
        >
          <Todo todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        </CSSTransition>
      ))}
    </TransitionGroup>
    {show ? <h4>{todos.filter(todo => !todo.complete).length} left to do</h4> : <h4>List is empty</h4> }
    <button onClick={clearTodosHandler} className="clearBtn">Clear Complete</button>
    </div>
  )
}

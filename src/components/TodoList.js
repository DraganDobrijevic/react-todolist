import React from 'react'
import Todo from './Todo'

import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className="todoList">
    <TransitionGroup>
      {todos.map(todo => (
        <CSSTransition
          key={todo.id}
          timeout={500}
          classNames="todoAnim"
          todo={todo} 
          deleteTodo={deleteTodo} 
          toggleTodo={toggleTodo}
        >
          <Todo />
          {/* <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/> */}
        </CSSTransition>
      ))}
    </TransitionGroup>
    <h4>{todos.filter(todo => !todo.complete).length} left to do</h4>
    </div>
  )
}

import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from '../TodoList'

const LOCAL_STORAGE_KEY = 'react-todolist.todos'

export default function Home() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const addTodoHandler = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  const clearTodosHandler = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div>
      <div className="addTodo">
        <input ref={todoNameRef} type="text"/>
        <button onClick={addTodoHandler}>Add Todo</button>
      </div> 
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <button onClick={clearTodosHandler} className="clearBtn">Clear Complete</button>
      <h6>{todos.filter(todo => !todo.complete).length} left to do</h6>
    </div>
  )
}

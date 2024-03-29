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
    console.log("snima");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const toggleTodo = id => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
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

  return (
    <div>
      <div className="addTodo">
        <input ref={todoNameRef} type="text"/>
        <button onClick={addTodoHandler}>Add Todo</button>
      </div> 
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} setTodos={setTodos} />
    </div>
  )
}

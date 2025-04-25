import { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        const data = await res.json()
        setTodos(data)
      } catch {
        setError('Failed to fetch todos')
      } finally {
        setLoading(false)
      }
    }
    fetchTodos()
  }, [])

  const addTodo = async (title) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false, userId: 1 })
      })
      const newTodo = await res.json()
      setTodos([newTodo, ...todos])
    } catch {
      setError('Failed to add todo')
    }
  }

  const deleteTodo = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE'
      })
      setTodos(todos.filter(todo => todo.id !== id))
    } catch {
      setError('Failed to delete todo')
    }
  }

  return (
    <div className="app-container">
      <div className="todo-app">
        <h1 className="app-title">Todo App</h1>
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        <AddTodoForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  )
}

export default App

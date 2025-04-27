import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Finish project report", completed: true },
    { id: 3, text: "Call mom", completed: false },
    { id: 4, text: "Practice coding", completed: false },
    { id: 5, text: "Meditate for 10 minutes", completed: true }
  ]);

  const [currentTodo, setCurrentTodo] = useState(null);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, updatedText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    ));
    setCurrentTodo(null);
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-app-container">
      <h1 className="todo-title">Daily Tasks</h1>
      <TodoForm
        onAdd={handleAddTodo}
        currentTodo={currentTodo}
        onEdit={handleEditTodo}
      />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={setCurrentTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
}

export default App;

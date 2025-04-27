import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onEdit, onToggle }) {
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => onToggle(todo.id)}>
              {todo.text}
            </span>
            <div className="todo-actions">
              <button onClick={() => onEdit(todo)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  
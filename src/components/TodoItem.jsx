import React from 'react';

function TodoItem({ todo, onDelete, onEdit, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span>{todo.text}</span>
      <div className="todo-buttons">
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={() => onToggle(todo.id)}>
          {todo.completed ? 'Undo' : 'Done'}
        </button>
      </div>
    </li>
  );
}

export default TodoItem;

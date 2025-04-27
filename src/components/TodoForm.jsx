import { useState, useEffect } from 'react';

function TodoForm({ onAdd, currentTodo, onEdit }) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (currentTodo) {
      onEdit(currentTodo.id, text);
    } else {
      onAdd(text);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        {currentTodo ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TodoForm;

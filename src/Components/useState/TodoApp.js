/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: false },
  ]);

  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle('');
    }
  };

  return (
    <div>
      <h1>Todo app</h1>
      <div>
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Tado name</label>
      </div>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;

import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} title={item.title} completed={item.completed} />
      ))}
    </ul>
  );
}

export default TodoList;

import React from 'react';
import './Todo.module.scss';
import TodoList from './TodoList/TodoList';
import Context from './Context/Context';
import AddTodo from './AddTodo/AddTodo';

function Todo() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'BMW' },
    { id: 2, completed: false, title: 'Mazda' },
    { id: 3, completed: false, title: 'Mercedes' },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        return {
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed,
        };
      }),
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ]),
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div>
        <h2>React Todo</h2>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No Todos !</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default Todo;

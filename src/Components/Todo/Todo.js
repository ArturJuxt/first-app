import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Todo.module.scss';
import TodoList from './TodoList/TodoList';
import AddTodo from './AddTodo/AddTodo';
import { addTodo } from '../../Actions';

function Todo() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  function handleAddTodo(title) {
    dispatch(
      addTodo({
        title,
        id: Date.now(),
        completed: false,
      }),
    );
  }

  return (
    <div className={s.todo}>
      <h2>React Todo</h2>
      <AddTodo onCreate={handleAddTodo} />
      {todos.length ? <TodoList todos={todos} /> : <p>No Todos !</p>}
    </div>
  );
}

export default Todo;

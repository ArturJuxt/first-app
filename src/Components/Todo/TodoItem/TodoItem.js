import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, toggleTodo } from '../../../Actions';
import s from './TodoItem.module.scss';

function TodoItem({ todo, index }) {
  const dispatch = useDispatch();

  const classes = [];
  if (todo.completed) {
    classes.push(s.done);
  }

  function handleDeleteTodo() {
    dispatch(deleteTodo(todo.id));
  }

  function handleToggleTodo() {
    dispatch(toggleTodo(todo.id));
  }

  return (
    <li className={s.itemLi}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.complect}
          onChange={handleToggleTodo}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button type="button" onClick={handleDeleteTodo}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number, // eslint-disable-line
};

export default TodoItem;

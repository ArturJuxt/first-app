import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import s from './TodoItem.module.scss';
import Context from '../Context/Context';

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push(s.done);
  }

  const handleChange = () => onChange(todo.id);

  return (
    <li className={s.itemLi}>
      <span className={classes.join(' ')}>
        <input
          type="checkbox"
          checked={todo.complect}
          onChange={handleChange}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number, // eslint-disable-line
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;

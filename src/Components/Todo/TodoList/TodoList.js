import React from 'react';
import PropTypes from 'prop-types';
import s from './TodoList.module.scss';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  return (
    <ul className={s.list}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;

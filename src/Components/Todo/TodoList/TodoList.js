import React from 'react';
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

export default TodoList;

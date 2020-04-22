/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const cls = ['todo'];
  if (checked) {
    cls.push(completed);
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>
      </label>
    </li>
  );
}

export default TodoItem;

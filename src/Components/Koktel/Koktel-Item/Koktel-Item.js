import React from 'react';
import s from './Koktel-Item.scss';

function KoktelItem(props) {
  return (
    <div className={s.koktelItem}>
      <li>
        {props.water}
        <button type="button" onClick={props.onDelete}>Del</button>
      </li>
    </div>
  );
}

export default KoktelItem;

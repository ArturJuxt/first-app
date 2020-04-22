import React from 'react';
import s from './Koktel-Item.module.scss';

function KoktelItem(props) {
  return (
    <div className={s.koktelItem}>
      <li className={s.itemLi}>
        {props.water}
        <button type="button" onClick={props.onDelete}>
          Del
        </button>
      </li>
    </div>
  );
}

export default KoktelItem;

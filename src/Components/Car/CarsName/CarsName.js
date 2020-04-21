import React from 'react';
import s from './CarsName.module.scss';

function CarsName(props) {
  return (
    <div className={s.carsName}>
      <h3>Car Name {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      <button type="button" onClick={props.changeTitle}>
        Click
      </button>
    </div>
  );
}

export default CarsName;

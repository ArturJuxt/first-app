import React from 'react';
import s from './Index.module.scss';

function Counter({ counter, inc, dec, rnd }) {
  return (
    <div className={s.count}>
      <h2 id="counter"> {counter} </h2>
      <button type="button" id="inc" onClick={inc}>
        INC
      </button>
      <button type="button" id="dec" onClick={dec}>
        DEC
      </button>
      <button type="button" id="rnd" onClick={rnd}>
        RND
      </button>
    </div>
  );
}

export default Counter;

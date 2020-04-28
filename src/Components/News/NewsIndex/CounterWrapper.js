import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Counter from './Counter';
import { inc, dec, rnd } from '../../../Actions';

function CounterWrapper() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <Counter
      counter={count}
      inc={() => dispatch(inc())}
      dec={() => dispatch(dec())}
      rnd={() => dispatch(rnd())}
    />
  );
}

export default CounterWrapper;

import * as React from 'react';
import { withCounter } from 'contexts/Counter';

interface Props {
  state: any;
  actions: any;
}

const Counter = (props: Props) => {
  const { state, actions } = props;
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={actions.increment}>+</button>
      <button onClick={actions.decrement}>-</button>
    </div>
  );
};

export default withCounter(Counter);

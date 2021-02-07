import React, { useState, useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.increment:
      return { count: state.count + 1 };
    case ACTIONS.decrement:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [count, setCount] = useState(0);

  function increment() {
    dispatch({ type: ACTIONS.increment });
  }

  function decrement() {
    dispatch({ type: ACTIONS.decrement });
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

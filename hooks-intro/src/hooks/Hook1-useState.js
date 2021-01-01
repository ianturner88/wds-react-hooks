import React, { useState } from 'react';

function Hook1() {
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((previousCount) => previousCount - 1);
  }

  function updateCount() {
    setCount((previousCount) => previousCount + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={updateCount}>+</button>
    </>
  );
}

export default Hook1;

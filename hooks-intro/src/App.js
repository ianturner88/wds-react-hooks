import React, { useState } from 'react';

function App() {
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

export default App;

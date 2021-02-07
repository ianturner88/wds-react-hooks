import React, { useState, useReducer } from 'react';

const ACTIONS = {};

function reducer(state, action) {}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}

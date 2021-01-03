// allows the previous state to be stored and accessed without re-rendering the component

import React, { useEffect, useState, useRef } from 'react';

function Hook6() {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
}

export default Hook6;

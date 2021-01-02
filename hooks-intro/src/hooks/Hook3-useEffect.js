import React, { useState, useEffect } from 'react';

function Hook3() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return <div>{windowWidth}</div>;
}

export default Hook3;

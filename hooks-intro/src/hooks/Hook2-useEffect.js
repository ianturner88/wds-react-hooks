import React, { useState, useEffect } from 'react';

function Hook2() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setitems] = useState([]);

  // useEffect is only activated if the resource Type is altered
  useEffect(() => {
    console.log('render');
  }, [resourceType]);

  // only executes when the file starts up
  useEffect(() => {
    console.log('start');
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setitems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}

export default Hook2;

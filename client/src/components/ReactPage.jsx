import React, { useState } from 'react';

function ReactPage() {
  const [count, setCount] = useState(0);

  // Define your styles
  const h1Style = {
    color: 'lightblue',
    fontSize: '45px',
  };

  const buttonStyle = {
    backgroundColor: 'rgb(85, 83, 83)', 
    border: 'none',
    color: 'white',
    padding: '15px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '13px',
    margin: '4px 2px',
    cursor: 'pointer',
  };

  return (
    <>
      <h1 style={h1Style}>Vite + React</h1>
      <div className="card" style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default ReactPage;

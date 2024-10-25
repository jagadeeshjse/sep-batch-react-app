import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  console.log(count);

  const increment = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <div>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
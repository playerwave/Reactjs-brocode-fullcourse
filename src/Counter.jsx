import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p className="counter-display">{count}</p>
      <button className="btn-counter" onClick={increment}>
        ADD Count
      </button>
      <button className="btn-counter" onClick={reset}>
        Reset
      </button>
      <button className="btn-counter" onClick={decrement}>
        DEL Count
      </button>
    </div>
  );
}

export default Counter;

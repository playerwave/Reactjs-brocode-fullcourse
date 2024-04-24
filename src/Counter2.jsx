import { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1); //setCount(count + 1) 2 บรรทัด ไม่เท่ากับ setCount(count + 2)
    setCount(count + 1);
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function delCount() {
    setCount((c) => c - 1);
    setCount((c) => c - 1); //แต่แบบนี้ทำได้
    setCount((c) => c - 1);
  }

  return (
    <div>
      <h1>Counter Program</h1>
      <h1>{count}</h1>
      <button className="counter-btn2" onClick={addCount}>
        ADD
      </button>
      <button className="counter-btn2" onClick={reset}>
        RESET
      </button>
      <button className="counter-btn2" onClick={delCount}>
        DEL
      </button>
    </div>
  );
}

export default Counter2;

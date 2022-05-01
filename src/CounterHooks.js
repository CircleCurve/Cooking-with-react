import React, { useState } from "react";

export default function CounterHooks({ initalCount }) {
  const [count, setCount] = useState(initalCount);
  return (
    <>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <span>{count}</span>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </>
  );
}

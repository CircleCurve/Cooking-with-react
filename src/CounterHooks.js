import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks({ initalCount }) {
  const [count, setCount] = useState(initalCount);
  const style = useContext(ThemeContext);
  return (
    <>
      <div>
        <button
          style={style}
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <span>{count}</span>
        <button
          style={style}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

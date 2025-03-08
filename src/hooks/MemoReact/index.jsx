import { useState } from "react";
import {Counter} from "./MemoReact";

export const MemoComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center flex-column gap-4">
      <h1>Memorization : {count}</h1>
      <button
        className="btn btn btn-danger fs-3"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <Counter></Counter>
    </div>
  );
};

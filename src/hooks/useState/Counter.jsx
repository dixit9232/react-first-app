import { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="container d-grid justify-content-center text-center">
      <h1 className="m-3 mb-5 fs-2 ">UseState Example</h1>

      <p className="fs-2 mb-5">{count}</p>

      <button className="btn btn-outline-info py-3" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

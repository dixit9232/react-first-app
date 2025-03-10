import { useMemo, useState } from "react";

export const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <ExpensiveComponent />

      <h1>Counter: {count}</h1>

      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

const ExpensiveComponent = () => {
  const sum = () => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };
  const total = useMemo(sum, []);
  return <h1>Total: {total}</h1>;
};

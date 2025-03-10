import { memo, useCallback, useMemo, useState } from "react";

export const UserCallBackHook = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    console.log("Incrementing");
    setCount((count) => count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    console.log("Decrementing");
    setCount((count) => count - 1);
  }, []);

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center gap-3">
      <h1 className="fs-1"> Count: {count}</h1>

      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

const Button =memo(({ onClick, children }) => {
  console.log("Rendering button", children);
  return (
    <button
      className={`${
        children.toString().toLowerCase() === "increment"
          ? "btn btn-primary"
          : "btn btn-secondary"
      } fs-3 px-5 py-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

import { useReducer } from "react";

export const UserReducerHookComponent = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "+":
        return state + 1;
      case "-":
        return state > 0 ? state - 1 : 0;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 flex-column gap-3">
      <h1>Count: {count}</h1>
      <div className="d-flex gap-3">
        <button
          className="btn btn-outline-primary px-5 py-2 fs-3"
          onClick={() => {
            dispatch({ type: "+" });
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-outline-danger px-5 py-2 fs-3"
          onClick={() => {
            dispatch({ type: "-" });
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

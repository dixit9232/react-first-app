import { memo, useRef } from "react";
const Counter = memo(() => {
  const counter = useRef(0);

  return (
    <div>
      <p>
        rebuild component
        <span className="text-danger"> {counter.current++} </span>
        time
      </p>
    </div>
  );
});

export { Counter };

import { useState } from "react";

export const State = () => {
  //   let count = 0;
  //   const increment = () => {
  //     count++;
  //     console.log(count);
  //   };

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="m-auto text-center">
        <h1>{count}</h1>
     
        <br />
        <br />
        <button
          className="btn btn-outline-primary"
          style={{
            width: "200px",
            height: "50px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onClick={increment}
        >
          Increment
        </button>
      </div>
    </>
  );
};

import { useState } from "react";

export const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
    <h1 className="mb-4">
        Lifting State UP
    </h1>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({inputValue,setInputValue}) => {
  return (
    <input
      type="text"
      placeholder="Enter Your name"
      className="form-control mx-auto fs-3 mb-3"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};

const DisplayComponent = ({inputValue}) => {
  return <p>This is input value: {inputValue}</p>;
};

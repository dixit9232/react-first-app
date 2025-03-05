import { useContextAPI } from "./ContextAPI";


export const ContextAPIComponent = () => {
  const { count } = useContextAPI();

  return <h1 className="text-center m-5">Count: {count}</h1>;
};

export const ButtonComponent = () => {
  const { count, setCount } = useContextAPI();

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="d-flex justify-content-center">
      <button
        className="btn btn-primary text-capitalize fs-3 px-5 py-3"
        onClick={handleButtonClick}
      >
        increment
      </button>
    </div>
  );
};

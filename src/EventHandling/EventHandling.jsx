export const EventHandling = () => {
  const handleOnClick = (event) => {
    alert("Button clicked");
  };

  const handleOnSuccessClick = (event, user) => {
    alert(`Welcome ${user} to the website`);
  };

  return (
    <>
      <button className="btn btn-primary py-2 px-5 m-2" onClick={handleOnClick}>
        Click me
      </button>
      <br />
      <button
        className="btn btn-success py-2 px-5 m-2"
        onClick={(event) => handleOnSuccessClick(event, "John")}
      >
        Click me
      </button>
    </>
  );
};

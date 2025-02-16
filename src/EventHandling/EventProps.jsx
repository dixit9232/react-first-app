export const EventProps = (props) => {
  const handleOnClick = (event) => {
    const elementText = event.target.innerText;
    alert("Button clicked " + elementText);
  };

  const handleOnHover = () => {
    alert("Hovered on button");
  };

  return (
    <>
      <WelcomeComponent onClick={handleOnClick} onHover={handleOnHover} />
    </>
  );
};

const WelcomeComponent = (props) => {
  const { onClick, onHover } = props;

  const handleLocalOnClock = (event) => {
    alert("Local on click");
    onClick(event);
  };

  return (
    <>
      <button className="btn btn-primary px-5 py-2" onClick={onClick}>
        On Click
      </button>
      <br />
      <br />
      <button className="btn btn-success px-5 py-2" onMouseEnter={onHover}>
        On Hover
      </button>
      <br />
      <br />
      <button
        className="btn btn-danger px-5 py-2 text-white"
        onClick={handleLocalOnClock}
      >
        Local On Click
      </button>
    </>
  );
};

export const EventPropagation = () => {
  const handleChildClick = (e) => {
    console.log("Child Clicked");
    e.stopPropagation();
  };
  const handleParentClick = (e) => {
    console.log("Parent Clicked");
    // e.stopPropagation();
    
  };

  const handleGrandParentClick = (e) => {
    console.log("Grand Parent Clicked");
    e.stopPropagation();
  };
  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div
        style={{
          backgroundColor: "red",
          width: "40rem",
          aspectRatio: "1",
          display: "grid",
          placeItems: "center",
        }}
        onClick={handleGrandParentClick}
      >
        <div
          style={{
            backgroundColor: "green",
            width: "30rem",
            aspectRatio: "1",
            display: "grid",
            placeItems: "center",
          }}
        //   onClick={handleParentClick}
        onClickCapture={handleParentClick}
        >
          <div
            style={{
              backgroundColor: "yellow",
              width: "20rem",
              aspectRatio: "1",
              display: "grid",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.5rem",
              placeItems: "center",
            }}
            onClick={handleChildClick}
          >
            Child Container
          </div>
        </div>
      </div>
    </div>
  );
};

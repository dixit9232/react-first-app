import { useNavigate } from "react-router";

import "../../css/ErrorPage.css";
export const ErrorPage = () => {
  const navigate = useNavigate();

  console.log(navigate);
  

  const handleOnClick = () => {
    navigate(-1);
  }


  return (
    <section className="error-section">
      <figure className="error-image">
        <img src="/public/images/error.svg" alt="404 Not found page" />
        <figcaption>404 Page Not Found</figcaption>
      </figure>
      <div className="error-message">
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You can go back to the homepage.</p>
        <button onClick={handleOnClick} className="error-button">
          Go back
        </button>
      </div>
    </section>
  );
};

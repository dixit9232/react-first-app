import { NavLink } from "react-router";
import "../../css/MoviesCard.css";

export const MoviesCard = ({ movie }) => {
  const { Poster, Title, imdbID } = movie;
  return (
    <>
      <div className="card">
        <img src={Poster} alt={Title} />
        <div className="card-body">
          <h3 className="card-title">{Title}</h3>
        </div>
        <NavLink to={`/movies/${imdbID}`} className="nav-link">
          <button className="watch-now">Watch Now</button>
        </NavLink>
      </div>
    </>
  );
};

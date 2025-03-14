import { useLoaderData } from "react-router";
import "../css/MoviesDetails.css";

export const MoviesDetails = () => {
  const data = useLoaderData();

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Production,
    Website,
  } = data;

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star full">
          ★
        </span>
      );
    }

    if (halfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="movie-page">
      {/* Header */}
      <h1 className="page-title">Movie Details</h1>

      <div className="movie-container">
        {/* Movie Image */}
        <img src={Poster} alt={Title} className="movie-poster" />

        {/* Movie Info */}
        <div className="movie-info">
          <h2>
            {Title} ({Year})
          </h2>
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
          <p>
            <strong>Director:</strong> {Director}
          </p>
          <p>
            <strong>Writer:</strong> {Writer}
          </p>
          <p>
            <strong>Actors:</strong> {Actors}
          </p>
          <p>
            <strong>Released:</strong> {Released}
          </p>
          <p>
            <strong>Runtime:</strong> {Runtime}
          </p>
          <p>
            <strong>Rated:</strong> {Rated}
          </p>
          <p>
            <strong>Language:</strong> {Language}
          </p>
          <p>
            <strong>Country:</strong> {Country}
          </p>
        </div>
      </div>

      {/* Plot */}
      <div className="movie-details">
        <h3>Plot</h3>
        <p>{Plot}</p>

        {/* Ratings */}
        <h3>Ratings</h3>
        <div className="ratings">
          <div className="imdb-rating">
            <p>
              <strong>IMDb Rating:</strong> {imdbRating} ({imdbVotes} votes)
            </p>
            <div className="stars">{renderStars(imdbRating)}</div>
          </div>
          <p>
            <strong>Metascore:</strong> {Metascore}
          </p>
        </div>

        {/* Additional Info */}
        <h3>Additional Information</h3>
        <p>
          <strong>Awards:</strong> {Awards}
        </p>
        <p>
          <strong>Box Office:</strong> {BoxOffice}
        </p>
        <p>
          <strong>Production:</strong> {Production}
        </p>
        {Website && (
          <p>
            <strong>Website:</strong>{" "}
            <a href={Website} target="_blank" rel="noopener noreferrer">
              {Website}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

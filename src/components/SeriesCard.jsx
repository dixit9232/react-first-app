import "../css/App.css";

import styled from "styled-components"; 

export const SeriesCard = ({ series }) => {
  const {
    Poster_Link,
    Series_Title,
    Runtime_of_Series,
    Certificate,
    Runtime_of_Episodes,
    Genre,
    IMDB_Rating,
    Overview,
    Star1,
    Star2,
    Star3,
    Star4,
    No_of_Votes,
  } = series;

  return (
    <div className="series-card">
      <div className="seriesImage">
        <img
          src={Poster_Link}
          alt={`${Series_Title}'s Poster`}
          loading="lazy"
        />
      </div>

      <div className="seriesContent">
        <h2 >Name: {Series_Title}</h2>
        <h3>Rating: {IMDB_Rating}/10 ⭐</h3>
        <p >
          <strong>Summary:</strong> {Overview}
        </p>

        <p>
          <strong>Genres:</strong> {Genre}
        </p>
        <p>
          <strong>Runtime of Series:</strong> {Runtime_of_Series}
        </p>
        <p>
          <strong>Runtime of Episodes:</strong> {Runtime_of_Episodes}
        </p>
        <p>
          <strong>Certificate:</strong> {Certificate}
        </p>

        <p>
          <strong>Stars:</strong> {Star1}, {Star2}, {Star3}, {Star4}
        </p>

        <p>
          <strong>No of Votes:</strong> {No_of_Votes} ❤️
        </p>
      </div>
    </div>
  );
};

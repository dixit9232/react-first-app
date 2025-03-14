import { useLoaderData } from "react-router";
import { MoviesCard } from "../components/UI/MoviesCard";

export const Movies = () => {
  const movies = useLoaderData();
  return (
    <div  >
      <h1>Movie List</h1>
      <ul className=" grid grid-four-cols">
        {movies.Search.map((movie) => (
          <MoviesCard key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

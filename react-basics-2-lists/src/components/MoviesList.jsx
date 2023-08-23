import { useState } from "react";
import moviesData from "../data/movies-data.json";
import MovieCard from "./MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const HTMLMovies = moviesData.map((movie) => {
    console.log('moviesData: ', moviesData);
    return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}/>;
  });

  return (
    <div>
      <h2>Movie List</h2>
      {HTMLMovies}
    </div>
  );
}

export default MoviesList;

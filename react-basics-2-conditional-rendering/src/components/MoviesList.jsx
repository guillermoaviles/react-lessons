import { useState } from "react";
import moviesData from "../data/movies-data.json";
import MovieCard from "./MovieCard";

function MoviesList() {
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const toggleShowMovies = () => {
    if (showMovies === true) {
      setShowMovies(false);
    } else setShowMovies(true);
  };

  const HTMLMovies = movies.map((movie) => {
    console.log("moviesData: ", moviesData);
    return (
      <MovieCard key={movie._id} movie={movie} handleDelete={deleteMovie} />
    );
  });

  return (
    <div>
      <h2>Movie List</h2>
      <button onClick={toggleShowMovies}>Show / Hide Movies</button>
      {showMovies ? HTMLMovies : <h3>Movies are hidden</h3>}
    </div>
  );
}

export default MoviesList;

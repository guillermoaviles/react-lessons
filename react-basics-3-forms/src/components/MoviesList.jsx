import { useState } from "react";
import moviesData from "../data/movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MoviesList() {
  const [movies, setMovies] = useState(moviesData);

  const addNewMovie = (movie) => {
    setMovies([...movies, movie])
  }

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const HTMLMovies = movies.map((movie) => {
    console.log('moviesData: ', moviesData);
    return <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}/>;
  });

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie addMovie={addNewMovie}/>
      {HTMLMovies}
    </div>
  );
}

export default MoviesList;

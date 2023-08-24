function MovieCard({ key, movie, deleteMovie }) {

    console.log('key: ', key);
  return (
    <div key={key} className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
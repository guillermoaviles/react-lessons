function MovieCard({ movie, handleDelete }) {

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      {movie.hasOscars ? (
        <p>Has received an Oscar</p>
      ) : (
        <p>Has not received Oscar</p>
      )}

      <button onClick={() => handleDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
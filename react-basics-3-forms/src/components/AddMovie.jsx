// src/components/AddMovie.jsx

import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDirectorInput = (e) => setDirector(e.target.value);
  const handleIMDBRatingInput = (e) => setIMDBRating(e.target.value);
  const handleHasOscarsInput = (e) => setHasOscars(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
        _id: Math.random(),
        title, 
        director,
        IMDBRating,
        hasOscars

        // Below is the same
        // title: title, 
        // director: director,
        // IMDBRating: IMDBRating,
        // hasOscars: hasOscars
    }
    props.addMovie(newMovie);
  }

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      <form onSubmit={handleSubmit}>
      <label>Title: </label>
      <input type="text" name="title" value={title} onChange={handleTitleInput}/>
 
      <label>Director: </label>
      <input type="text" name="director" value={director} onChange={handleDirectorInput}/>
 
      <label>IMDB Rating: </label>
      <input type="number" name="IMDBRating" value={IMDBRating} onChange={handleIMDBRatingInput}/>
 
      <label>Won Oscars: </label>
      <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleHasOscarsInput}/>
 
      <button type="submit" >Add a Movie</button>
    </form>
    </div>
  );
}

export default AddMovie;

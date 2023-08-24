import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  const [isLoading, setLoading] = useState(false);

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  } else {
    return (
      <div className="App">
        <MoviesList />
      </div>
    )
  }
}

export default App;

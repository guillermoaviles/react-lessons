import "./App.css";
import SimpleList from "./components/SimpleList";
import Students from "./components/Students";
import ProjectList from "./components/ProjectList";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <SimpleList />
      <Students />
      <ProjectList />
      <MoviesList />
    </div>
  );
}

export default App;

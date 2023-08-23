import "./App.css";
import SimpleList from "./components/SimpleList";
import Students from "./components/Students";
import ProjectList from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <SimpleList />
      <Students />
      <ProjectList />
    </div>
  );
}

export default App;

import "./App.css";
import landscape from "./assets/landscape.jpeg";
import Navbar from "./components/Navbar";
import Country from "./components/Country";
import Countries from "./components/Countries";

function App() {
  const person = {
    name: "Guillermo",
    city: "Miami",
  };

  const h1Id = "h1-id";

  const sum = (n1, n2) => n1 + n2;

  const puertoRicoInfo = {
    country: "Puerto Rico",
    population: "3.264 million",
    area: "5,325 mi²",
  };
  const uSaInfo = {
    country: "U.S.A.",
    population: "331.9 million",
    area: "3.797 million mi²",
  };
  const spainInfo = {
    country: "Spain",
    population: "47.42 million",
    area: "195,364 mi²",
  };

  return (
    <>
      <Navbar />
      <h1 id={h1Id}>Hello!</h1>
      <p>
        My name is {person.name} & I live in {person.city}.
      </p>
      <p>2 + 3 + {sum(2, 3)}</p>
      <img src={landscape} />

      <Countries>
        <hr />
        <Country info={puertoRicoInfo} />
        <hr />
        <Country info={uSaInfo} />
        <hr />
        <Country info={spainInfo} />
        <hr />
      </Countries>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageIndex from "./components/PageIndex";
import MiniaturePokemon from "./components/MiniaturePokemon";
import Statistique from "./components/Statistique";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PageIndex />} />
        <Route path="/pokemon/:pokemonId" element={<MiniaturePokemon />} />
        <Route path="/statistique/:pokemonId" element={<Statistique />} />
      </Routes>
    </Router>
  );
}

export default App;

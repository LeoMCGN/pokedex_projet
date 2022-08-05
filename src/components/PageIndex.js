import "../App.css";
import { useState, useEffect } from "react";
import MiniaturePokemon from "./MiniaturePokemon";

function PageIndex() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const getAllPokemon = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await response.json();
        setAllPokemon((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    console.log(allPokemon);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="app-container">
      <h1>Pokédex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon, index) => (
            <MiniaturePokemon
              id={pokemon.id}
              name={pokemon.name}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
        <button className="btn-load-more" onClick={() => getAllPokemon()}>
          Charger plus de Pokémon
        </button>
      </div>
    </div>
  );
}

export default PageIndex;

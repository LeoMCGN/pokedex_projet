import { useParams } from "react-router-dom";
import React from "react";
import MiniaturePokemon from "./MiniaturePokemon";
import PageIndex from "./PageIndex";
import { useState, useEffect } from "react";
import axios from "axios";

const Statistique = (props) => {
  let { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, []);

  if (!pokemon) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="detail-pokemon">
        <h1>Détail de {pokemon.name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`} alt={pokemon.name} />
        <div className="detail">
          <h2 className="text-stat">Plus d'info sur les stats </h2>
          <div className="stats">
            {pokemon.stats.map((stat, index) => (
              <small key={stat.stat.name}>
                <small className="stat-name">
                  {" "}
                  {stat.stat.name} : {stat.base_stat}{" "}
                </small>
              </small>
            ))}
          </div>
          <div className="type">
            {pokemon.types.map((type, index) => (
              <small key={type.type.name}>
                <small className="type-name"> {type.type.name}</small>
              </small>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Statistique;

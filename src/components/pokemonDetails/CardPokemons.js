import React from "react";
import "./CardPokemons.css";

function PokemonDetails({ name, id, onClick, url }) {
  const arrayIds = url.split("/", [7]);
  const arrayId = arrayIds[6];

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${arrayId}.svg`;

  return (
    <div className="pokemonDetails" id={id} key={id} onClick={onClick}>
      <img src={imageUrl} alt="" />

      <h1>{name}</h1>
    </div>
  );
}

export default PokemonDetails;

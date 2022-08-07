import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Pokemon.css";

function PokemonDetails() {
  const pokemonName = useParams();

  const [singlePokemon, setSinglePokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.name}`)
      .then((res) => res.json())
      .then((data) => {
        setSinglePokemon(data);
      })
      .catch((err) => console.log(err));
  }, [pokemonName.name]);

  if (!singlePokemon) {
    return <>Loading …</>;
  }

  console.log(singlePokemon);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${singlePokemon.id}.svg`;

  const { abilities, base_experience, moves, height, weight, stats } =
    singlePokemon;
  const { front_default, front_shiny, back_default, back_shiny } =
    singlePokemon.sprites;

  return (
    <div className="container">
      <div className="pokemonCard">
        <div className="pokemonCardHeader">
          <img src={url} alt="" srcset="" />

          <h1>{singlePokemon.name}</h1>
          <div className="pokemonCardTypes">
            <div className="pokemonTypeCard">
              {singlePokemon.types.map(({ type: { name } }) => (
                <h4 className="pokemonType" key={name}>
                  {name}
                </h4>
              ))}
            </div>
          </div>
        </div>

        <div className="pokemonCardBody">
          <div className="details displayFlex">
            <div className="title">
              <h3>Details</h3>
            </div>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Base Experience: {base_experience}</p>
          </div>

          <div className="abilities displayFlex">
            <div className="title">
              <h3>Abilities</h3>
            </div>
            {abilities?.map((powers) => (
              <p key={powers.ability.name}>{powers.ability.name}</p>
            ))}
          </div>
          <div className="stats displayFlex">
            <div className="title">
              <h3>Stats</h3>
            </div>
            <ul>
              {stats?.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat?.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="movesContainer displayFlex flexDirectionColumn">
            <div className="title">
              <h3>Moves</h3>
            </div>
            <div className="moves">
              {moves?.map((move) => (
                <p className="move" key={move.move.name}>
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;

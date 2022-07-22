import React from "react";

import RenderPoke from "./card/RenderPoke";

import "./AddPokemon.css";

const AddPokemon = ({ objPokemon }) => {

  return (
    <div className="container-add-poke">
      <div className="panel-cards">
      {objPokemon.map((pokemon) => (
        <RenderPoke key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
    </div>
  );
};

export default AddPokemon;

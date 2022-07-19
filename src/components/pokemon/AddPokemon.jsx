import React from "react";

import RenderPoke from "./RenderPoke";

import "./AddPokemon.css";

const AddPokemon = ({ objPokemon }) => {

  return (
    <div className="container-add-poke">
      {objPokemon.map((pokemon) => (
        <RenderPoke key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default AddPokemon;

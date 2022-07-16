import React from "react";

import RenderPoke from "./RenderPoke";

import "./AddPokemon.css";

const AddPokemon = ({ objPokemon }) => {
  console.log(objPokemon)
  return (
    <div className="container-add-poke">
      {objPokemon.forEach((pokemon) => (
        <RenderPoke objPokemon={pokemon} />
      ))}
    </div>
  );
};

export default AddPokemon;

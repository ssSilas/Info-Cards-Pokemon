import React from "react";

import RenderPoke from "./RenderPoke";

import "./AddPokemon.css";

const AddPokemon = ({ objPokemon }) => {
  return (
    <div className="container-add-poke">
      {objPokemon.forEach((pokemon) => {
        return (<RenderPoke pokemon={pokemon} />);
      })}
    </div>
  );
};

export default AddPokemon;

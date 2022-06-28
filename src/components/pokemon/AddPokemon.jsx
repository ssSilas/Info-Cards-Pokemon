import React from "react";

import RenderPoke from "./RenderPoke";

import "./AddPokemon.css";

const AddPokemon = ({ objPokemon }) => {
  return (
    <div className="container-add-poke">
      <RenderPoke objPokemon={objPokemon} />
    </div>
  );
};

export default AddPokemon;

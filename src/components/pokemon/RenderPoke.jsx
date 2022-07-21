import React from "react";
import { useState } from "react";

import Pokemon from "./Pokemon";

import "./RenderPoke.css";

const RenderPoke = ({ pokemon }) => {
  const addIcons = (pokemon) => {
    pokemon.type.map((t, index) => {
      const name = t.type.name;
      const nameUpper = name[0].toUpperCase() + name.substr(1)
      const path = nameUpper;
      pokemon['icontype'][index] = path
    });
    return pokemon
  };
  // console.log(pokemon)
  return (
    <div className="render-poke">
      <Pokemon pokemon={addIcons(pokemon)} />
    </div>
  );
};

export default RenderPoke;

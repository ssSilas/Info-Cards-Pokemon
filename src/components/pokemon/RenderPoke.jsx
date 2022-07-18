import React from "react";

import Pokemon from "./Pokemon";

import "./RenderPoke.css";

const RenderPoke = ({ pokemon }) => {
  
  return (
    <div className="render-poke">
      {pokemon.map(pk => {
        return (
          <div className="render-poke" key={pk.id}>
            <Pokemon pokemon={pk} />
          </div>
        );
      })}
    </div>
  );
};

export default RenderPoke;

import React from "react";
import { useEffect } from "react";

import Pokemon from "./Pokemon";

import "./RenderPoke.css";

const RenderPoke = ({ pokemon }) => {
  useEffect(() => {
    console.log(pokemon);
  }, []);
  console.log(pokemon);
  return (
    <div className="render-poke">
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default RenderPoke;

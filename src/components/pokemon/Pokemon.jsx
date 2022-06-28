import React from "react";

import "./Pokemon.css";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="container-panel-poke">
      <img className="img-poke" src={pokemon.photo.front_default} />
      <h3 className="title-name-poke">{pokemon.name}</h3>
      <div className="container-type-poke">
        {pokemon.type.map((obj) => 
          <div className="type-name-poke" key={obj.slot}>
            {obj.slot <= 1 ? obj.type.name : `|${obj.type.name}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokemon;

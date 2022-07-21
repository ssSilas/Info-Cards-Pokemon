import { type } from "@testing-library/user-event/dist/type";
import React from "react";

import "./Pokemon.css";
import "../types_icon_img/Bug_Type_Icon.svg.png"

const Pokemon = ({ pokemon }) => {
  return (
    <div className="container-panel-poke" key={pokemon.id}>
      <div className="container-icon-type">
        {Object.keys(pokemon.icontype).map(key => {
          return (<img className="icon-type" src={require(`../types_icon_img/${pokemon.icontype[key]}_Type_Icon.svg.png`)} alt="" />)})}
      </div>
      <img className="img-poke" src={pokemon.photo.front_default} />
      <h3 className="title-name-poke">{pokemon.name}</h3>
      <div className="container-type-poke">
        {pokemon.type.map(obj => {
          return (
            <div className="type-name-poke" key={obj.slot}>
              {obj.slot <= 1 ? obj.type.name : `|${obj.type.name}`}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;

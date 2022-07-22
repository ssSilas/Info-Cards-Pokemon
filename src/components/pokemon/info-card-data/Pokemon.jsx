/* eslint-disable */

import React from "react";

import "./Pokemon.css";
import ButtonPhoto from "./ButtonPhoto";

const Pokemon = ({ pokemon }) => {

  return (
    <div className="container-panel-poke" key={pokemon.id}>
      <div className="container-upper-card">

        <div className="container-icon-type">
          {Object.keys(pokemon.icontype).map(key => {
            return (
              <img className="icon-type" key={key} src={require(`../../types_icon_img/${pokemon.icontype[key]}_Type_Icon.svg.png`)} />
            )})}
        </div>

        <div className="container-others-photos">

          {Object.keys(pokemon.photo).map(key => {
            return (<ButtonPhoto key={key}/>)
          })}

        </div>

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

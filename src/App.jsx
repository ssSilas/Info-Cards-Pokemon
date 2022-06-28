import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import AddPokemon from "./components/pokemon/AddPokemon";

function App() {
  console.clear();
  const [pokemon, setPokemon] = useState([
    // {
    //   id: 1,
    //   name: "bulbasaur",
    //   photo: {
    //     front_default:
    //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    //     front_female: null,
    //     front_shiny:
    //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
    //     front_shiny_female: null,
    //   },
    //   type: [
    //     {
    //       slot: 1,
    //       type: {
    //         name: "grass",
    //         url: "https://pokeapi.co/api/v2/type/12/",
    //       },
    //     },
    //     {
    //       slot: 2,
    //       type: {
    //         name: "poison",
    //         url: "https://pokeapi.co/api/v2/type/4/",
    //       },
    //     },
    //   ],
    // },
  ]);

  useEffect(() => {
    const reqPokemon = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${1}`;
      const req = await fetch(url);
      const response = await req.json();
      const getData = {
        id: response.id,
        name: response.name,
        photo: response.sprites.other.home,
        type: response.types,
      };
      const newPokes = [...pokemon, getData];
      setPokemon(newPokes);
    };
    reqPokemon();
  }, []);

  return (
    <>
      <Header />
      <AddPokemon objPokemon={pokemon} />
    </>
  );
}

export default App;

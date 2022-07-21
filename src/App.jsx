import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import AddPokemon from "./components/pokemon/AddPokemon";
import useFetch from "./components/pokemon/useFetch";

import "./App.css";

function App() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=40`;
  const { data, isFetching } = useFetch(url);

  return (
    <>
      <Header />
      {isFetching == false ? <AddPokemon objPokemon={data} /> : null}
    </>
  );
}

export default App;

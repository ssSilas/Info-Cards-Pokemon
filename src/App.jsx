import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import AddPokemon from "./components/pokemon/AddPokemon";
import useFetch from "./components/pokemon/useFetch";

import "./App.css";

function App() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=3`;
  const { data, isFetching } = useFetch(url);

  return (
    <>
      <Header />
      {isFetching && <p>Carregando...</p>}
      {typeof data !== "undefined" ? <AddPokemon objPokemon={data} /> : <p>Não rendereizou</p>}
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import AddPokemon from "./components/pokemon/AddPokemon";
import useFetch from "./components/pokemon/useFetch";

// import {GrowExample} from "../public/Loading.jsx"

import "./App.css";

function App() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=15`;
  const { data, isFetching } = useFetch(url);
  
  return (
    <>
      <Header />
      {isFetching == true && "..."}
      {isFetching == false ? <AddPokemon objPokemon={data} /> : <p>Não rendereizou</p>}
    </>
  );
}

export default App;

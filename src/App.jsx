import React from "react";
import { useState } from "react";

import Header from "./components/header/Header";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon] = useState();

  return (
    <>
      <Header />
    </>
  );
}

export default App;

import React from 'react'

import Pokemon from './Pokemon';

import './RenderPoke.css'

const RenderPoke = ({objPokemon}) => {
  return ( 
    <>
      {objPokemon.map((pokemon) => 
        <div className='render-poke' key={pokemon.id}>
          <Pokemon pokemon={pokemon}/>
        </div>
      )}
    </>
  );
}
 
export default RenderPoke;
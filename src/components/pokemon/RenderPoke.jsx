import React from 'react'

import Pokemon from './Pokemon';

import './RenderPoke.css'

const RenderPoke = ({objPokemon}) => {
  return ( 
    <>
      {objPokemon.map((pokemon) => 
        <div className='render-poke' key={objPokemon.id}>
          <Pokemon pokemon={objPokemon}/>
        </div>
      )}
    </>
  );
}
 
export default RenderPoke;
import React from 'react';

import './App.css';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';


const App = () => {
  const abilities = ['lightning-rod', 'static', 'surge-surfer'];
  const date = new Date().toLocaleDateString();


  return (
    <div>
      <Logo appName="Pokedex" />
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pidgey" className='logo-img' />
      <BestPokemon abilities={ abilities } />
      <CaughtPokemon date={ date } />
    </div>
  );
}

export default App;

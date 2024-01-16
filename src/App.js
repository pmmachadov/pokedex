import React from 'react';
import './index.css';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';

const App = () => {
  const abilities = ['lightning-rod', 'static', 'surge-surfer'];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("I was clicked");
  };

  return (
    <div>
      <Logo
        appName="Pokedex"
        imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        altText="Pidgey"
        className='logo-img'
        handleClick={ logWhenClicked }
      />
      <BestPokemon abilities={ abilities } />
      <CaughtPokemon date={ date } />
    </div>
  );
}

export default App;

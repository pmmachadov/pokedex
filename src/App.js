import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Logo from './Logo';
import BestPokemon from './BestPokemon';
import CaughtPokemon from './CaughtPokemon';
import PokemonInfo from './PokemonInfo'; // Importa PokemonInfo component

const App = () => {
  const abilities = ['lightning-rod', 'static', 'surge-surfer'];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("I was clicked");
  };

  return (
    <BrowserRouter>
      <Logo
        appName="Pokedex"
        imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        altText="Pidgey"
        className='logo-img'
        handleClick={ logWhenClicked }
      />
      <div className="link-container">
        <Link to="/best-pokemon">Best Pokemon</Link>
        <Link to="/caught-pokemon">Caught Pokemon</Link>
      </div>

      <Routes>
        <Route path="/best-pokemon" element={ <BestPokemon abilities={ abilities } /> } />
        <Route path="/caught-pokemon" element={ <CaughtPokemon date={ date } /> } />
        <Route path="/pokemon/:id" element={ <PokemonInfo /> } /> {/* Dynamic URL parameter for ID */ }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

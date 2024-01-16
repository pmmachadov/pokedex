import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([]);

    const catchPokemon = () => {
        // Sample Pokémon data
        const pokemonData = [
            { id: 1, name: 'Pikachu' },
            { id: 2, name: 'Charizard' },
            { id: 3, name: 'Mew' },
            { id: 4, name: 'Lugia' },
            { id: 5, name: 'Dragonite' },
            { id: 6, name: 'Gengar' },
            { id: 7, name: 'Bulbasaur' },
            { id: 8, name: 'Charmander' },
            { id: 9, name: 'Squirtle' },
            { id: 10, name: 'Mewtwo' },
            { id: 11, name: 'Snorlax' },
            { id: 12, name: 'Zapdos' },
            { id: 13, name: 'Moltres' },
            { id: 14, name: 'Articuno' },
            { id: 15, name: 'Gyarados' },
            { id: 16, name: 'Lapras' },
            { id: 17, name: 'Vaporeon' },
            { id: 18, name: 'Jolteon' },
            { id: 19, name: 'Flareon' },
            { id: 20, name: 'Espeon' },
            { id: 21, name: 'Umbreon' },
            { id: 22, name: 'Leafeon' },
            { id: 23, name: 'Glaceon' },
            { id: 24, name: 'Sylveon' },
            { id: 25, name: 'Garchomp' },
            { id: 26, name: 'Gardevoir' },
            { id: 27, name: 'Gallade' },
            { id: 28, name: 'Greninja' },
            { id: 29, name: 'Lucario' },
            { id: 30, name: 'Machamp' },
            { id: 31, name: 'Alakazam' },
            { id: 32, name: 'Golem' },
            { id: 33, name: 'Gengar' },
            { id: 34, name: 'Gyarados' },
            { id: 35, name: 'Arcanine' }
        ];
        const randomPokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
        setCaught([...caught, randomPokemon]);
    };

    return (
        <>
            <p>Caught { caught.length } Pokémon on { props.date }</p>
            <button onClick={ catchPokemon }>Catch Pokémon</button>
            <ul>
                { caught.map(pokemon => (
                    <li key={ pokemon.id }>{ pokemon.name }</li>
                )) }
            </ul>
        </>
    );
}

CaughtPokemon.propTypes = {
    date: PropTypes.string.isRequired
}

export default CaughtPokemon;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const PokemonInfo = ({ match }) => {
    const { id } = match.params; // Get the ID from URL parameter
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        // Make an API request to fetch Pokemon data by ID
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
            .then(response => {
                setPokemonInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching Pokemon data:', error);
            });
    }, [id]);

    if (!pokemonInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Pokemon Information</h1>
            <p>Name: { pokemonInfo.name }</p>
            <p>Color: { pokemonInfo.color.name }</p>
            <p>Shape: { pokemonInfo.shape.name }</p>
            <p>Base Happiness: { pokemonInfo.base_happiness }</p>
            <p>Capture Rate: { pokemonInfo.capture_rate }</p>
        </div>
    );
}

PokemonInfo.propTypes = {
    match: PropTypes.object,
};

export default PokemonInfo;

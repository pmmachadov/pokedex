import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CaughtPokemon = (props) => {

    const [caught, setCaught] = useState(0);

    const catchPokemon = () => {
        setCaught(caught + 1);
    };

    return (
        <>
            <p>Caught { caught } Pokémon on { props.date }</p>
            <button onClick={ catchPokemon }>Catch Pokémon</button>
        </>
    );
}

CaughtPokemon.propTypes = {
    date: PropTypes.string.isRequired
}

export default CaughtPokemon
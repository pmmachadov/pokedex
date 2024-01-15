import React from 'react'
import PropTypes from 'prop-types'

const CaughtPokemon = (props) => {

    return (
        <p>Caught 0 Pokémon on { props.date }</p>
    );
}

CaughtPokemon.propTypes = {
    date: PropTypes.string.isRequired
}

export default CaughtPokemon
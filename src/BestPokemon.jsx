import React from 'react'
import PropTypes from 'prop-types'

const BestPokemon = (props) => {

    return (
        <div>
            <p>My favorite Pokemon is Pikachu! It has abilities like:</p>
            <ul>
                { props.abilities.map(ability => (
                    <li key={ ability }>{ ability }</li>
                )) }
            </ul>
        </div>
    );
}

export default BestPokemon

BestPokemon.propTypes = {
    abilities: PropTypes.array
}

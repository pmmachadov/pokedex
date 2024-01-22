import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BestPokemon extends Component {
    constructor() {
        super();
        this.state = {
            pokemonNames: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
            .then((res) => res.json())
            .then((data) => {
                const names = [
                    data.pokemon_entries[0].pokemon_species.name,
                    data.pokemon_entries[3].pokemon_species.name,
                    data.pokemon_entries[6].pokemon_species.name,
                ];

                this.setState({
                    pokemonNames: names,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // (STRETCH GOAL) Handle error and render an error message
            });
    }

    render() {
        if (this.state.isLoading) {
            return <span>Loading...</span>;
        } else {
            return (
                <div>
                    <p>My favorite Pokemon is Pikachu! It has abilities like:</p>
                    <ul>
                        { this.props.abilities.map((ability) => (
                            <li key={ ability }>{ ability }</li>
                        )) }
                    </ul>
                    <p>Pokemon Names:</p>
                    <ul>
                        { this.state.pokemonNames.map((name, index) => (
                            <li key={ index }>{ name }</li>
                        )) }
                    </ul>
                </div>
            );
        }
    }
}

BestPokemon.propTypes = {
    abilities: PropTypes.array,
};

export default BestPokemon;

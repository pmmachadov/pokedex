import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';

class CaughtPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caught: 0
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    catchPokemon = () => {
        this.setState({ caught: this.state.caught + 1 });
        //this.setState((prevState) => ({ caught: prevState.caught + 1 }));
    };

    render() {
        return (
            <>
                <p>Caught { this.state.caught } Pokémon on { this.props.date }</p>
                <button onClick={ this.catchPokemon }>Catch Pokémon</button>
            </>
        );
    }
}

CaughtPokemon.propTypes = {
    date: PropTypes.string.isRequired
};

export default CaughtPokemon;

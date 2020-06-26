import React, { Component } from 'react';

import Aux from '../utils/Aux';
import pokemonService from '../services/pokemonService';
import PokemonList from '../components/PokemonList';
import PokemonModal from '../components/PokemonModal';

class FeaturedPokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            selected: null,
        };
    }

    async componentDidMount() {

        const pokemon = await pokemonService.getAll();

        this.setState({
            pokemon: pokemon,
        });
    }

    onClickHandler = (clickedPokemon) => {
        this.setState({selected: clickedPokemon});
    }

    onCloseClick = () => {
        this.setState({selected: null});
    }

    render() {
        return (
            <Aux>
                {(this.state.pokemon.length > 0) ? 
                    (<PokemonList pokemon={this.state.pokemon} onClickHandler={this.onClickHandler} />) :
                    (<p>Loading pokemon...</p>)
                }
                {(this.state.selected) ?
                    (<PokemonModal onCloseClick={this.onCloseClick} pokemon={this.state.selected}/>) :
                    (null)
                }
            </Aux>
        );
    }
}

export default FeaturedPokedex;
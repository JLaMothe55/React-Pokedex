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
            page: 0
        };
    }

    async componentDidMount() {

        const pokemon = await pokemonService.getAll(this.state.page);

        this.setState({
            pokemon: pokemon,
            page: this.state.page + 1
        });
    }

    onClickHandler = (clickedPokemon) => {
        this.setState({selected: clickedPokemon});
    }

    onCloseClick = () => {
        this.setState({selected: null});
    }

    getNext60Pokemon = async () => {

        const morePokemon = await pokemonService.getAll(this.state.page);

        this.setState({
            pokemon: this.state.pokemon.concat(morePokemon),
            page: this.state.page + 1
        })
       
       
    }

    render() {
        return (
            <Aux>
                {(this.state.pokemon.length > 0) ? 
                    (<PokemonList pokemon={this.state.pokemon} onClickHandler={this.onClickHandler} getNext60Pokemon={this.getNext60Pokemon} />) :
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
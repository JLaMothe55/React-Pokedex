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
            page: 0,
            generationNumber: null,
            generationName: "national",
            idStart: 1,
            idEnd: 999
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

    generationSelection = async (generationNumber, generationName, idStart, idEnd, page) => {

        this.generationWipe()

        const genSelect = await pokemonService.getAll(page);

        this.setState({
            pokemon: this.state.pokemon.concat(genSelect),
            page: page + 1,
            generationNumber: generationNumber,
            generationName: generationName,
            idStart: idStart,
            idEnd: idEnd
        })
    }

    generationWipe = async () => {
        this.setState({
            pokemon: [],
            page: null
        })
    }
    
    render() {
        return (
            <Aux>
                <div>
                    <h3>Generation selection</h3>
                    <button onClick={() => this.generationSelection(1, "Kanto", 1, 151, 0)} >Gen 1</button>
                    <button onClick={() => this.generationSelection(2, "Johto", 152, 251, 2)} >Gen 2</button>
                    <button onClick={() => this.generationSelection(3, "Hoenn", 252, 386, 4)}>Gen 3</button>
                    <button onClick={() => this.generationSelection(4, "Sinnoh", 387, 493, 6)}>Gen 4</button>
                    <button onClick={() => this.generationSelection(5, "Unova", 494, 649, 8)}>Gen 5</button>
                    <button onClick={() => this.generationSelection(6, "Kalos", 650, 721, 10)}>Gen 6</button>
                    <button onClick={() => this.generationSelection(7, "Alola", 722, 809, 12)}>Gen 7</button>
                </div>
                {(this.state.pokemon.length > 0) ? 
                    (<PokemonList 
                        pokemon={this.state.pokemon} 
                        onClickHandler={this.onClickHandler} 
                        getNext60Pokemon={this.getNext60Pokemon} 
                        page={this.state.page} 
                        generationNumber={this.state.generationNumber}
                        generationName={this.state.generationName}
                        idStart={this.state.idStart}
                        idEnd={this.state.idEnd} />) :
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
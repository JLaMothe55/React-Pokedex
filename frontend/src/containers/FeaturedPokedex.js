import React, { Component } from 'react';

import InfiniteScroll from 'react-infinite-scroller'
import Aux from '../utils/Aux';
import pokemonService from '../services/pokemonService';
import PokemonList from '../components/PokemonList';
import PokemonModal from '../components/PokemonModal';
import classes from './FeaturedPokedex.module.css';

class FeaturedPokedex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            selected: null,
            page: 0,
            generationNumber: null,
            generationName: "National",
            idStart: 1,
            idEnd: 999,
            hasMore : true
        };
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
            page: this.state.page + 1,
            hasMore: morePokemon.length === 60
        })
    }

    generationSelection = async (generationNumber, generationName, idStart, idEnd, page) => {

        await this.generationWipe()

        //const genSelect = await pokemonService.getAll(page);

        this.setState({
           // pokemon: this.state.pokemon.concat(genSelect),
            page: page,
            generationNumber: generationNumber,
            generationName: generationName,
            idStart: idStart,
            idEnd: idEnd,
            hasMore: true
        })
    }

    generationWipe = async () => {
        this.setState({
            pokemon: [],
            page: null,
            generationNumber: null,
            generationName: "National",
            idStart: 0,
            idEnd: 0,
            hasMore: false
        })
    }
    
    render() {
        return (
            <InfiniteScroll
                pageStart={this.state.page}
                loadMore={this.getNext60Pokemon}
                hasMore={this.state.hasMore}
                loader={<div className="loader" key={0}></div>}
                
            >
                <Aux>
                    <div className={classes.InfoDiv}>
                        <h3>Display Pokemon Added In Each Generation</h3>

                        {(this.state.generationName === "National") ? (
                            null
                        ) : (<div>
                            <button className={classes.GenButtons} onClick={() => this.generationSelection(1, "National", 1, 999, 0)} >National Pokedex</button>
                        </div>)} 
                        
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(1, "Kanto", 1, 151, 0)} >Gen 1</button>
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(2, "Johto", 152, 251, 2)} >Gen 2</button>
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(3, "Hoenn", 252, 386, 4)}>Gen 3</button>
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(4, "Sinnoh", 387, 493, 6)}>Gen 4</button>
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(5, "Unova", 494, 649, 8)}>Gen 5</button>
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(6, "Kalos", 650, 721, 10)}>Gen 6</button>
                        <button className={classes.GenButtons} onClick={() => this.generationSelection(7, "Alola", 722, 809, 12)}>Gen 7</button>
                    </div>
                    {(this.state.generationName === "National") ? (
                        <div className={classes.GenDisplayText}>
                            <h4>You are viewing the {this.state.generationName} Pokedex</h4>
                        </div>
                    ): (
                        <div className={classes.GenDisplayText}>
                            <h4>Your are viewing Pokemon added in the {this.state.generationName} region</h4>
                        </div>
                    )}
                    
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
                        (<PokemonModal onCloseClick={this.onCloseClick} pokemon={this.state.selected} loggedIn={this.props.loggedIn}/>) :
                        (null)
                    }
                </Aux>
            </InfiniteScroll>
        );
    }
}

export default FeaturedPokedex;
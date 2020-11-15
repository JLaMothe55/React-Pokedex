import React, { Component } from 'react';

import classes from './PokemonList.module.css';

class PokemonList extends Component {
    constructor(props) {
        super(props);
    }

    nameElipses = (name) => {
        return name.slice(0, 7).concat("...")
    }
    
    pokemonFilter = (pokemon) => pokemon.id >= this.props.idStart && pokemon.id <= this.props.idEnd;
    

    renderPokemonSummary = (pokemon) => (
        <div className={classes.Divencase} onClick={() => this.props.onClickHandler(pokemon)}>
            
			{(pokemon.sprites[0]) ? (<img className={classes.ImageStyling} src={pokemon.sprites[0].front_default} />) : (<p>no image found</p>)}
            
            <p>#{pokemon.id}</p>

            {(pokemon.name.length <= 10) ? (<p className={classes.Name}>{pokemon.name}</p>) : (<p className={classes.Name}>{this.nameElipses(pokemon.name)}</p>)}
            
        </div>
    );

    render(){
        return (
            <div className={classes.Encase}>
    
                {this.props.pokemon.filter(this.pokemonFilter).map(this.renderPokemonSummary)}
                
             </div>
        );
    }
};

export default PokemonList;
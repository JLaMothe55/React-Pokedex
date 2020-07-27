import React from 'react';

import classes from './PokemonList.module.css';

const PokemonList = (props) => {

    const renderPokemonSummary = (pokemon) => (
		
        <div className={classes.Divencase} onClick={() => props.onClickHandler(pokemon)}>
			{(pokemon.sprites[0]) ? (<img src={pokemon.sprites[0].front_default} />) : (<p>no image found</p>)}
            
            <p>#{pokemon.id}</p>
            <p className={classes.Name}>{pokemon.name}</p>
        </div>
    );

    return (
        <div className={classes.Encase}>
            {props.pokemon.map( renderPokemonSummary )}
            <button onClick={props.getNext60Pokemon}>The next 60</button>
        </div>
    );
};

export default PokemonList;
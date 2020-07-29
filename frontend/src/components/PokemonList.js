import React from 'react';

import classes from './PokemonList.module.css';

const PokemonList = (props) => {

    const renderPokemonSummary = (pokemon) => (
		(pokemon.id >= props.idStart && pokemon.id <= props.idEnd) ?  
        (<div className={classes.Divencase} onClick={() => props.onClickHandler(pokemon)}>
            
			{(pokemon.sprites[0]) ? (<img src={pokemon.sprites[0].front_default} />) : (<p>no image found</p>)}
            
            <p>#{pokemon.id}</p>
            <p className={classes.Name}>{pokemon.name}</p>
        </div>) : (null)
    );
    console.log(props.generationName)
    return (
        
        <div className={classes.Encase}>

            {props.pokemon.map( renderPokemonSummary )}
            <div>
            {(props.page <= 13 && props.pokemon.length-1 <= props.idEnd) ?
                (<button onClick={props.getNext60Pokemon}>The next 60</button>) :
                (null)}
            </div>
         </div>
    );
};

export default PokemonList;
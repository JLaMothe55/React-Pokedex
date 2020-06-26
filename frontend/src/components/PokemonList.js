import React from 'react';

const PokemonList = (props) => {

    const renderPokemonSummary = (pokemon) => (
		
        <div onClick={() => props.onClickHandler(pokemon)}>
			{(pokemon.sprites[0]) ? (<img src={pokemon.sprites[0].front_default} />) : (<p>no image found</p>)}
            
            <p>#{pokemon.id}</p>
            <p>{pokemon.name}</p>
			
        </div>
    );

    return (
        <div>
            {props.pokemon.map( renderPokemonSummary )}
        </div>
    );
};

export default PokemonList;
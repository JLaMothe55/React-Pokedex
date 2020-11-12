import React,{ Component } from 'react';

import Aux from '../utils/Aux';
import PokemonList from '../components/PokemonList';
import PokemonModal from '../components/PokemonModal';
import favoriteService from '../services/favoriteService';
import pokemonService from '../services/pokemonService';
import classes from './UserPage.module.css';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            favoritePokemonIds: [],
            selected: null,
            page: 0,
            generationNumber: 0,
            generationName: "Favorites",
            idStart: 1,
            idEnd: 999
        };
    }

    async componentDidMount() {
        const favoritePokemonIds = await favoriteService.getAll();
        console.log(favoritePokemonIds)
    this.setState({
            pokemon: await this.gettingPokemonById(favoritePokemonIds),
            favoritePokemonIds: favoritePokemonIds,
            
        });
    }


        


    quickSortFavorites = (pokemonArray) => {
        if(pokemonArray.length < 2) {
            return pokemonArray;
        }
  
        var pivot = pokemonArray[0];
        var lessThanArray = [];
        var greaterThanArray = [];
    
        for (var i = 1; i < pokemonArray.length; i++) {
        if ( pokemonArray[i].id > pivot.id ) {
            greaterThanArray.push(pokemonArray[i]);
        } else {
            lessThanArray.push(pokemonArray[i]);
        }
        }
    
        return this.quickSortFavorites(lessThanArray).concat(pivot, this.quickSortFavorites(greaterThanArray));
    }


    gettingPokemonById = async (favoritePokemonIds) => {
        const gettingPokemon = await Promise.all(favoritePokemonIds.map(pokemonId => pokemonService.getPokemonById(pokemonId)))
        console.log(gettingPokemon)
        return this.quickSortFavorites(gettingPokemon)
    }

    onClickHandler = (pokemon) => {
        this.setState({selected: pokemon});
    }

    onCloseClick = () => {
        this.setState({selected: null});
    }

    render() {
        
        return (
            <Aux>
                <div className={classes.FavoriteDisplayText}>
                    <h3>Your Favorited Pokemon</h3>
                </div>
        
                {(this.state.pokemon) ? 
                    (<PokemonList 
                        pokemon={this.state.pokemon} 
                        onClickHandler={this.onClickHandler}
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
        );
    }
}



export default UserPage;
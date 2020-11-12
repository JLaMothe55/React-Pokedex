import React, { Component } from 'react';

import favoriteService from '../services/favoriteService';
import classes from './Pokemon.module.css';

class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favoritedPokemonIds : []
        };
    }

    async componentWillMount() {
        if (this.props.loggedIn){
            const favoritePokemonIds = await favoriteService.getAll();
            console.log(favoritePokemonIds);
            this.setState({
                favoritedPokemonIds: favoritePokemonIds,
            });
        }
    }

    isFavorite = favoritePokemonIds => favoritePokemonIds.filter((pokemonId) => this.props.pokemon._id === pokemonId).length > 0;

    onClickFavorite = async() => {
        const favoritePokemonIds = await favoriteService.postFavorite(this.props.pokemon);
        this.setState({
            favoritedPokemonIds: favoritePokemonIds,
        });
    }

    onClickFavorited = async() => {
        const favoritePokemonIds = await favoriteService.deleteFavorite(this.props.pokemon);
        this.setState({
            favoritedPokemonIds: favoritePokemonIds,
        });
    }

    render() {
       const isFavorited = this.isFavorite(this.state.favoritedPokemonIds);
        return (
            
            <div>
				{console.log(this.props.pokemon)}
                {(this.props.loggedIn) ?
                ((!isFavorited) ? 
                    (<button className={classes.Favorite} onClick={this.onClickFavorite}>Favorite</button>) :
                    (<button className={classes.Favorite} onClick={this.onClickFavorited}>Favorited</button>)) :
                    (<p>Log In to Favorite</p>)
                }
                <p className={classes.ID}>ID Number: {this.props.pokemon.id}</p>
                <p className={classes.Name}>Name: {this.props.pokemon.name}</p>
                <div className={classes.ImageDiv}>
                    <p>Default Appearances:</p>
                    <img className={classes.ImageStyling} src={this.props.pokemon.sprites[0].front_default} />
                    <img className={classes.ImageStyling} src={this.props.pokemon.sprites[0].back_default} />
                    
                </div>
                <div className={classes.ImageDiv}>
                    <p>Shiny Appearances:</p>
                    <img className={classes.ImageStyling} src={this.props.pokemon.sprites[0].front_shiny} />
                    <img className={classes.ImageStyling} src={this.props.pokemon.sprites[0].back_shiny} />
                </div>
                <p className={classes.Text}>Height: {this.props.pokemon.height}</p>
                <p className={classes.Text}>Weight: {this.props.pokemon.weight}</p>
                {(this.props.pokemon.types.length > 1) ? 
                    (<p className={classes.Name}>Types: {this.props.pokemon.types[0].type.name} & {this.props.pokemon.types[1].type.name}</p>) : 
                    (<p className={classes.Name}>Type: {this.props.pokemon.types[0].type.name}</p>)}

                {(this.props.pokemon.game_indices.length > 0) ? (<p className={classes.Name}>First game appearance: {this.props.pokemon.game_indices[0].version.name} & {this.props.pokemon.game_indices[1].version.name}</p>) : null}
                
            </div>
        )
    }
}

export default Pokemon;
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
            <p className={classes.Text}>Height: {Math.round(Number(this.props.pokemon.height) * 0.328084)}' {Math.round(12 * (Number(this.props.pokemon.height) * 0.328084 - Math.floor(Number(this.props.pokemon.height) * 0.328084)))}"</p>
                <p className={classes.Text}>Weight: {Math.round(Number(this.props.pokemon.weight) * .220462 * 100) / 100} Pounds</p>
                {(this.props.pokemon.types.length > 1) ? 
                    (<p className={classes.Name}>Types: {this.props.pokemon.types[0].type.name} & {this.props.pokemon.types[1].type.name}</p>) : 
                    (<p className={classes.Name}>Type: {this.props.pokemon.types[0].type.name}</p>)}

                {(this.props.pokemon.game_indices.length > 0) ? (<p className={classes.Name}>First game appearance: {this.props.pokemon.game_indices[0].version.name} & {this.props.pokemon.game_indices[1].version.name}</p>) : null}
                
            </div>
        )
    }
}

export default Pokemon;
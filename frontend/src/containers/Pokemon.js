import React, { Component } from 'react';

import favoriteService from '../services/favoriteService';

class Pokemon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favorited: false,
        };
    }

    async componentDidMount() {
        const favoritePokemonIds = await favoriteService.getAll();
        this.setState({
            favorited: this.isFavorite(favoritePokemonIds),
        });
    }

    isFavorite = favoritePokemonIds => favoritePokemonIds.filter((pokemonId) => this.props.pokemon._id === pokemonId) > -1;

    onClickFavorite = async() => {
        const favoritePokemonIds = await favoriteService.postFavorite(this.props.pokemon._id);
        this.setState({
            favorited: this.isFavorite(favoritePokemonIds),
        });
    }

    onClickFavorited = async() => {
        const favoritePokemonIds = await favoriteService.deleteFavorite(this.props.pokemon._id);
        this.setState({
            favorited: this.isFavorite(favoritePokemonIds),
        });
    }

    render() {
        return (
            <div>
				{console.log(this.props.pokemon)}
                {(!this.state.favorited) ? 
                    (<button onClick={this.onClickFavorite}>Favorite</button>) :
                    (<button onClick={this.onClickFavorited}>Favorited</button>)
                }
                <img src={this.props.pokemon.sprites[0].front_default} />
                <p>#{this.props.pokemon.id}</p>
                <p>{this.props.pokemon.name}</p>
                <ul>
                    <li>Some thing that matt forgot</li>
                </ul>
            </div>
        )
    }
}

export default Pokemon;
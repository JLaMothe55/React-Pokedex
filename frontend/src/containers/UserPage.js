import React,{ Component } from 'react';

import Aux from '../utils/Aux';
import PokemonList from '../components/PokemonList';
import PokemonModal from '../components/PokemonModal';
import favoriteService from '../services/favoriteService';
import pokemonService from '../services/pokemonService';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            favoritePokemonIds: [],
            selected: null,
        };
    }

    async componentDidMount() {
        const favoritePokemonIds = await favoriteService.getAll();
        const pokemon = await pokemonService.getAll();
        this.setState({
            pokemon: pokemon,
            favoritePokemonIds: favoritePokemonIds,
        });
    }

    onClickHandler = (pokemon) => {
        this.setState({selected: pokemon});
    }

    onCloseClick = () => {
        this.setState({selected: null});
    }

    render() {

        const pokemonList = this.state.pokemon.filter(
            pokemon => this.state.favoritePokemonIds.indexOf(pokemon) > -1
        );

        return (
            <Aux>
                {(pokemonList.length > 0) ? 
                    (<PokemonList pokemon={pokemonList} onClickHandler={this.onClickHandler} />) :
                    (<p>Loading pokemon...</p>)
                }
                {(this.state.selected) ?
                    (<PokemonModal onCloseClick={this.onCloseClick} />) :
                    (null)
                }
            </Aux>
        );
    }
}

export default UserPage;
import axios from 'axios';

const getAll = async () => {
    const res = await axios.get('/api/getFavorites')
        .catch(err => console.error(err));
    return res.data.favoritePokemonIds || [];
};

const postFavorite = async (pokemon) => {
    const res = await axios.post('/api/postFavorites', {
        pokemonId: pokemon._id,
    }).catch(err => console.error(err));
    return res.data.favoritePokemonIds;
};

const deleteFavorite = async (pokemon) => {
    const res = await axios.delete(`/api/Favorite/${pokemon._id}`)
        .catch(err => console.error(err));
    return res.data.favoritePokemonIds;
};

export default { getAll, postFavorite, deleteFavorite };
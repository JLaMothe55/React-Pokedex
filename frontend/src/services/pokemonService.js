import axios from 'axios';

const getAll = async (page) => {
    if (page === null) return [];
    const res = await axios.get(`/api/pokemon?page=${page}`)
        .catch(err => console.error(err));
    if (!res) return [];
    console.log(res.data.pokemon);
    return res.data.pokemon;
};

const getPokemonById = async (pokemonId) => {
    const res = await axios.get(`/api/getPokemonById?pokemonId=${pokemonId}`)
        .catch(err => console.error(err));
    if (!res) return [];
    return res.data.pokemon;
}

export default { getAll, getPokemonById };
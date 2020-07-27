import axios from 'axios';

const getAll = async (page) => {
    const res = await axios.get(`/api/pokemon?page=${page}`)
        .catch(err => console.error(err));
    if (!res) return [];
    return res.data.pokemon;
};

export default { getAll };
import axios from 'axios';

const getAll = async () => {
    const res = await axios.get('/api/pokemon')
        .catch(err => console.error(err));
    if (!res) return [];
    return res.data.pokemon;
};

export default { getAll };
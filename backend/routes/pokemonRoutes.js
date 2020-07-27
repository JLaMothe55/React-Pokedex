const mongoose = require('mongoose');
const CacheHandler = require('../services/CacheHandler');


module.exports = (app) => {

    app.get('/api/pokemon', async (req, res) => {
       
        var page = 0;

        if (req.query.page && !Number.isNaN(req.query.page)) {
            page = Number(req.query.page);
        }

        const results = await CacheHandler.getPokemonPaginated(page);
        
        
        return res.send({
            pokemon: results,
        });
    });
};


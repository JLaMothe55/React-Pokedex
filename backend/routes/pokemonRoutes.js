const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon');

module.exports = (app) => {

    app.get('/api/pokemon', async (req, res) => {
        
        const results = await Pokemon.find();

        return res.send({
            pokemon: results,
        });
    });
};
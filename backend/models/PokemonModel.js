const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    sprites: Array,
    game_indicies: Array,
    height: String,
    weight: String,
    types: Array,
    moves: Array,
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
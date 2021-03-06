var mongoose = require('mongoose');
var Pokemon = require('../models/PokemonModel');
var PokeAPI = require('./PokeAPI');

module.exports = function() {

    var OFFSET = 60;

    var getPokemonPaginated = function(page) {

        return new Promise(function(resolve, reject) {

            Pokemon.find({ id : { $gt: OFFSET * page, $lt:10000 }})
                .limit(OFFSET).sort('id').then(function(pokemonList) {

                if (pokemonList.length == 0 ) {

                    return PokeAPI.getPaginatedList(page, OFFSET).then(function(newPokemonList) {

                        mongoose.connection.collection(Pokemon.collection.collectionName).insertMany(newPokemonList).then(function() {
                            return resolve(newPokemonList);
                        }).catch(err => reject(err));
                    }).catch(err => reject(err));
                }

                return resolve(pokemonList);

            }).catch(err => reject(err));
        });
    };

    return {
        getPokemonPaginated: getPokemonPaginated,
    };
}();
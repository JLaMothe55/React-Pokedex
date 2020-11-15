const express = require('express');
const bodyParser = require('body-parser');
const cookierParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect(
    process.env.MONGODSN ? process.env.MONGODSN : 'mongodb://localhost:27017/pokedex', 
    {   useNewUrlParser: true,
        user: 'root',
        pass: 'password',
        authSource: "admin"
    }
);
require('./models/PokemonModel');
require('./models/UserModel');
require('./models/UserSeshModel');

app.use(bodyParser.json());
app.use(cookierParser());
require('./routes/authRoutes')(app);
require('./routes/pokemonRoutes')(app);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.listen(5000, () => {
    console.log('Starting express on port 5000');
});
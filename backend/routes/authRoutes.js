const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const sessionParser = require('../middleware/sessionParser');

const User = mongoose.model('User');
const UserSesh = mongoose.model('UserSesh');

module.exports = (app) => {

    app.get('/api/sessioninfo', sessionParser, async (req, res) => {
        
        return res.send({
            username: req.session.userRecord.username,
            firstName: req.session.userRecord.firstName,
            lastName: req.session.userRecord.lastName,
        });
    });

    app.post('/api/login', async (req, res) => {

        const usernameOrEmail = req.body.usernameOrEmail;
        const password = req.body.password;

        const userRecord = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });

        if (!userRecord) {
            return res.status(400).send();
        }

        if (!bcrypt.compareSync(password, userRecord.hashedSecret)) {
            return res.status(400).send();
        }

        const session = await UserSesh.create({
            user_id: userRecord._id,
        });

        res.cookie('PokeSesh', session._id);
        return res.send();
    });

    app.post('/api/register', async (req, res) => {
        
        const username = req.body.username;
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const password = req.body.password;
        const hashedSecret = bcrypt.hashSync(password, 10);

        await User.create({
            username: username,
            email: email,
            firstName: firstName,
            lastName: lastName,
            hashedSecret: hashedSecret,
        });

        return res.status(201).send();
    });

    app.delete('/api/signout', sessionParser, async (req, res) => {

        const cookie = req.session.cookie;

        await UserSesh.deleteOne({ _id: cookie });

        return res.status(200).send();
    });

    app.get('/api/getFavorites', sessionParser, async (req, res) => {

        const userRecord = req.session.userRecord;

        return res.send({
            favoritePokemonIds: userRecord.favorites,
        });
    });

    app.post('/api/postFavorites', sessionParser, async (req, res) => {

        const favorite = req.body.pokemonId;
        const userRecord = req.session.userRecord;

        if (userRecord.favorites.indexOf(favorite) === -1) {
            userRecord.favorites.push(favorite);
            await userRecord.save();
        }

        return res.send({
            favoritePokemonIds: userRecord.favorites,
        });
    });

    app.delete('/api/Favorite/:pokemonId', sessionParser, async (req, res) => {

        const favorite = req.params.pokemonId;
        const userRecord = req.session.userRecord;
        const favoriteIndex = userRecord.favorites.indexOf(favorite);

        if (favoriteIndex > -1) {
            userRecord.favorites.splice(favoriteIndex);
            userRecord.save();
        }

        return res.send({
            favoritePokemonIds: userRecord.favorites,
        });
    });
};
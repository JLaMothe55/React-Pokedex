const mongoose = require('mongoose');
const User = mongoose.model('User');
const UserSesh = mongoose.model('UserSesh');

module.exports = async (req, res, next) => {

    const cookie = req.cookies.PokeSesh;
    
    const userSesh = await UserSesh.findOne({ _id: cookie, expiry: { $gt: new Date() } });

    if (!userSesh) {
        return res.status(401).send();
    }

    const userRecord = await User.findOne({ _id: userSesh.user_id });

    req.session = {
        userRecord,
        cookie,
        userSesh,
    };

    return next();
};
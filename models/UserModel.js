const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    hashedSecret: String,
    favorites: Array,
});

module.exports = mongoose.model("User", userSchema);
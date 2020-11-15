const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const minutes = 30;
const oneMs = 60000;

const userSeshModel = new Schema({
    user_id: Schema.Types.ObjectId,
    logged_in: { type: Date, default: Date.now },
    expiry: { type: Date, default: () => new Date(Date.now() + minutes * oneMs) },
});

module.exports = mongoose.model("UserSesh", userSeshModel);
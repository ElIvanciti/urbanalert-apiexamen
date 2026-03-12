const mongoose = require('require');

const userSchema = new mongoose.Schema({
    email:{ type: String, required: true, unique: true},
    password:{ type: String, rquired: true},
});

module.exports = mongoose.module('User', userSchema);


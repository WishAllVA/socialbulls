const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    password: String,
    phone_number: Number,
    token: String
});
module.exports = mongoose.model('User', userSchema);
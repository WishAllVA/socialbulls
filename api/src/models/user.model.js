const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    emailVerified: {
        type: Boolean,
        default: false,
        required: true
    },
    password: String,
    countryCode: {
        type: String,
        default: '91'
    },
    phone_number: Number,
    dob: Date,
    token: String
});
module.exports = mongoose.model('User', userSchema);
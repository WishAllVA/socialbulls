const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    phone_number: Number,
    message: String
});
module.exports = mongoose.model('Contact', contactSchema);
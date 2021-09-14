const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    phone_number: Number,
    message: String
});
module.exports = mongoose.model('Contact', contactSchema);
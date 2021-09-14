const bcrypt = require('bcrypt');
require('dotenv').config()
const Contact = require('../models/contact.model');

const addContactMessage = async (req, res) => {
    console.log('Here')
    const { name, email, message, phone } = req.body
    try {
        const newContactMessage = await Contact.create({
            name: name,
            email: email,
            message: message,
            phone: phone,
        })
        if (newContactMessage) {
            res.status(200).json({
                message: "Message Added",
                success: true,
            })
        }

    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: "Bad request"
        })
    }

}
module.exports = {
    addContactMessage
}
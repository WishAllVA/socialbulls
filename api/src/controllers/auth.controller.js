const bcrypt = require('bcrypt');
require('dotenv').config()
const User = require('../models/user.model');
const jwt = require('jsonwebtoken')

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }
        res.status(400).json({
            message: "Invalid credentials"
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            message: "Bad request"
        })
    }

}

const signup = async (req, res) => {
    const { name, email, password, phone } = req.body
    try {
        if (!(email && password && name && phone)) {
            res.status(400).send("All input is required");
        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name: name,
            email: email,
            phone_number: phone,
            password: encryptedPassword
        })
        const token = jwt.sign(
            { user_id: newUser._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        )
        if (newUser) {
            newUser.token = token
            res.status(201).json({
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
    signin,
    signup
}
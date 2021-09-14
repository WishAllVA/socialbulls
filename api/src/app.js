const app = require('../server')
const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const contactRouter = require('./routes/contact.routes')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPass = encodeURIComponent(process.env.DB_PASS)

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.vyola.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise

app.use(cors(corsOptions))

app.use('/contact', contactRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'No such route exists'
    })
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: "Error Message"
    })
})

module.exports = app
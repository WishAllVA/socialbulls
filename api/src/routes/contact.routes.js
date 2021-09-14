const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const contactControllers = require('../controllers/contact.controller');
const router = express.Router();

router.post('/add', contactControllers.addContactMessage);

module.exports = router
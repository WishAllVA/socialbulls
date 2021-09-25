const express = require('express');
const checkAuth = require('../middlewares/checkAuth.middleware');
const authControllers = require('../controllers/auth.controller');
const router = express.Router();

router.post('/signin', authControllers.signin);

router.post('/signup', authControllers.signup);

module.exports = router
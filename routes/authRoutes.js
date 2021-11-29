const express = require('express')
const { login, register, favoriteJoke } = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.route('/register')
    .post(register)

authRouter.route('/login')
    .post(login)

authRouter.route('favorite/:id')
    .put(favoriteJoke)

module.exports = authRouter
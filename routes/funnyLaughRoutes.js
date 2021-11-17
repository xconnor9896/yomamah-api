const express = require('express');

const {getRandomJoke, getJoke, getAllJokes, createJoke, editJoke, deleteJoke} = require('../controllers/funnyLaughController')

const jokeRouter = express.Router();

jokeRouter.route('/')
    .get(getAllJokes)
    .get(getRandomJoke)

jokeRouter.route('/:id')
    .get(getJoke)
    .post(createJoke)

jokeRouter.route('/:user/:id')
    .put(editJoke)
    .delete(deleteJoke)

module.exports = jokeRouter
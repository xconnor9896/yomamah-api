const express = require('express');

const {
    getRandomJoke,
    getJoke, 
    getAllJokes, 
    createJoke, 
    editJoke, 
    deleteJoke,
    getUser,
    getAllUsers,
    updateJokeRating
} = require('../controllers/funnyLaughController')

const jokeRouter = express.Router();

jokeRouter.route('/')
    .get(getAllJokes)
    .get(getRandomJoke)
    .get(getAllUsers)
    .put(updateJokeRating)

jokeRouter.route('/:id')
    .get(getJoke)
    .get(getUser)
    .post(createJoke)
    

jokeRouter.route('/:user/:id')
    .put(editJoke)
    .delete(deleteJoke)

module.exports = jokeRouter
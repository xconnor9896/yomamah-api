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
    .put(() => updateJokeRating)
    .post(createJoke)

jokeRouter.route('/:id')
    .get(getJoke)
    .get(getUser)
    
    

jokeRouter.route('/:user/:id')
    .put(() => editJoke)
    .delete(deleteJoke)

module.exports = jokeRouter
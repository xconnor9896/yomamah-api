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

} = require('../controllers/funnyLaughController')

const jokeRouter = express.Router();

jokeRouter.route('/')
    .get(getRandomJoke)
    .post(createJoke)

jokeRouter.route('/users')
    .get(getAllUsers)

jokeRouter.route('/jokes')
    .get(getAllJokes)

jokeRouter.route('/user')
    .get(getUser)

jokeRouter.route('/:id')
    .get(getJoke)
    .put(() => editJoke)
    .delete(deleteJoke)

module.exports = jokeRouter
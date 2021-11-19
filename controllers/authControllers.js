//*codes for 8 hours then dies*
const User = require('../models/user')
const JWT = require('jsonwebtoken')

const login = async (req, res) => {
    res.send('login')
}

const register = async (req, res) => {
    const newUser = await User.create(req.body);
    const token = newUser.createJWT();
    res.json({user: {name: newUser.name}, token});
}

const favoriteJoke = async (req, res) => { 
    res.send('joke saved')
}

module.exports = {login, register, favoriteJoke}
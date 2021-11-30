//*codes for 8 hours then dies*
const User = require('../models/user')
const { UnauthError } = require('../errors');
const {BadRequestError} = require('../errors');


const login = async (req, res) => {

    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError("Enter an username AND a password.")
    }

    const userLogin = await User.findOne({ username });

    if (!userLogin) {
        throw new UnauthError('Invalid');
    }

    const isPasswordCorrect = await userLogin.comparePassword(password);
    console.log(isPasswordCorrect);

    if (!isPasswordCorrect) {
        throw new UnauthError('Invalid')
    }

    const token = userLogin.createJWT();

    res.json({ user: { name: newUser.username }, token });
}

const register = async (req, res) => {
    console.log(req.body);
    const newUser = await User.create(req.body);
    const token = newUser.createJWT();
    res.json({ user: { name: newUser.username }, token });
}

const favoriteJoke = async (req, res) => {
    res.send('joke saved')
}

module.exports = { login, register, favoriteJoke };
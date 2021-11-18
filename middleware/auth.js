const jwt = require('jsonwebtoken');
const { UnauthError } = require('../errors');
require('dotenv').config();

const auth = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthError('You cannot access this part of the site.');
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userID: payload.userID, name: payload.name }
        next();
    } catch (err) {
        throw new UnauthError('Authorization Invalid');
    }
}

module.exports = auth
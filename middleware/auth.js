const jwt = require('jsonwebtoken');
const { UnAuthError } = require('../errors');
require('dotenv').config();

const auth = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnAuthError('You cannot access this part of the site.');
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userID: payload.userID, name: payload.name }
        next();
    } catch (err) {
        throw new UnAuthError('Authorization Invalid');
    }
}

module.exports = auth
const CustomAPIError = require('./custom-api-error');
const {StatusCodes} = require('http-status-codes');

class BadRequest extends CustomAPIError {
    constructur(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest
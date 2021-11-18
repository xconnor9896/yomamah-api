const CustomAPIError = require('../errors/custom-api-error');

const errorHandlerMiddleware = async (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({mes: err.message});
    }
    return res.status(500).json({msg: "Something happened"});
}

module.exports = errorHandlerMiddleware;
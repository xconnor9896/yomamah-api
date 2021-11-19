const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
    punchline: {
        type: String,
        required: [true, `Punchline is required for a complete joke!`]
    },

    type: {
        type: String,
        required: [true, `must input the type of joke`],
        enum: {
            values: [`fat`, `ugly`, `stupid`, `old`, `hiary`, `short`, `skinny`, `tall`],
            message: "Unsupported joke type!"
        }
    },

    avgRating: {
        type: Number,
        default: 0    
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'please provide user when making funnies']
    },
})

module.exports = mongoose.model('Joke', jokeSchema)
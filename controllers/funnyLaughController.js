const Joke = require('../models/joke');
const User = require('../models/user');

const { NotFoundError, BadRequestError } = require('../errors');
const { StatusCodes } = require('http-status-codes');
//Humourous controllers that will make you die via suffocation from laughing so hard :D 

const getRandomJoke = async (req, res) => {
    //idfk do later or something
}

const getJoke = async (req, res) => {
    const {id: jokeID} = req.params

    const joke = await Joke.findOne({ id: jokeID })

    if(!joke){
        throw new NotFoundError('Joke not found, try a different search...')
    }
    res.status(StatusCodes.OK).json({joke})
}

const getAllJokes = async (req, res) => {
    const jokes = await Joke.find({ createdBy: req.user.userID }).sort("createdAt")

    res.status(StatusCodes.OK).json({ jokes, count: jokes.length });
}

const createJoke = async (req, res) => {
    req.body.createdBy = req.user.userID;

    const joke = await Joke.create(req.body);

    res.status(StatusCodes.CREATED).json({ joke });
}

const editJoke = async (req, res) => {
    const { punchline, type } = req.body;
    const { userID } = req.user;
    const { id: jokeID } = req.params;

    if (!company || !position) {
        throw new BadRequestError("Punchline and joke type fields must be filled");
    }

    const joke = await Joke.findByIdAndUpdate(
        { _id: jokeID, createdBy: userID },
        req.body,
        { new: true, runValidators: true }
    )

    if(!joke) {
        throw new NotFoundError(`No joke with ID ${id}`);
    }

    res.status(StatusCodes.OK).json({ joke });
}

const deleteJoke = async (req, res) => {
    const { user: { userID }, params: { id: jokeID } } = req;

    const joke = await Joke.findByIdAndRemove(
        {
            _id: jokeID,
            createBy: userID
        }
    )

    if (!joke) {
        throw new NotFoundError(`No joke found with ID ${id}`);
    }
}

const getUser = async (req, res) => {
    const { username } = req.user;
    const { id: userID } = req.params

    const user = await User.findOne({
        _id: userID
    })

    if (!user) {
        throw new NotFoundError(`${username} does not exist!`);
    }

    res.status(StatusCodes.OK).json({ user });
}

const getAllUsers = async (req, res) => {
    const users = await User.find({/* idk */ })
    res.status(StatusCodes.OK).json({ /* idk */ })
}

const updateJoke = async (req, res) => {
    res.send('update joke');
}


//maybe add more if we have time :)

module.exports = {
    getRandomJoke,
    getJoke,
    getAllJokes,
    createJoke,
    editJoke,
    deleteJoke,
    getUser,
    getAllUsers,
    updateJoke
}
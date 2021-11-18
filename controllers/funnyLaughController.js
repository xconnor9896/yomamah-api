//Humourous controllers that will make you die via suffocation from laughing so hard :D 

const getRandomJoke = async (req, res) => {
    res.send('get random joke')
}

const getJoke = async (req, res) => {
    res.send('get joke')
}

const getAllJokes = async (req, res) => {
    res.send('get all jokes')
}

const createJoke = async (req, res) => {
    res.send('create joke')
}

const editJoke = async (req, res) => {
    res.send('edit joke')
}

const deleteJoke = async (req, res) => {
    res.send('get joke')
}

const getUser = async (req, res) => {
    res.send('get user')
}

const getAllUsers = async (req, res) => {
    res.send('get all user')
}

const updateJoke = async (req, res) => {
    res.send('update joke')
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
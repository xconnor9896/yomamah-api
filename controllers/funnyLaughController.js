const getRandomJoke = (req, res) => {
    res.send('get random joke')
}

const getJoke = (req, res) => {
    res.send('get joke')
}

const getAllJokes = (req, res) => {
    res.send('get all jokes')
}

const createJoke = (req, res) => {
    res.send('create joke')
}

const editJoke = (req, res) => {
    res.send('edit joke')
}

const deleteJoke = (req, res) => {
    res.send('get joke')
}

//maybe add more if we have time :)

module.exports = {
    getRandomJoke,
    getJoke,
    getAllJokes,
    createJoke,
    editJoke,
    deleteJoke
}
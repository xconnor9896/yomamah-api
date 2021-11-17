const login = (req, res) => {
    res.send('login')
}

const register = (req, res) => {
    res.send('register')
}

const favoriteJoke = (req, res) => { 
    res.send('joke saved')
}

module.exports = {login, register, favoriteJoke}
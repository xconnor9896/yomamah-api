const notFound = (req, res) => {
    res.status(404).send("Route does not exist (yet)");
}

module.exports = notFound;
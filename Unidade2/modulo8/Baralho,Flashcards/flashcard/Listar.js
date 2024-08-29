const {flashCards} = require('../data')

const listarFlahscards = (req, res) => {
    res.status(200).send(flashCards)
}

module.exports = listarFlahscards
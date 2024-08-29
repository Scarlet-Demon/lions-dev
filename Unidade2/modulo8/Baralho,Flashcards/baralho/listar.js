const {baralhos} = require('../data')

const listarBaralhos = (req, res) => {
    res.status(200).send(baralhos)
}

module.exports = listarBaralhos
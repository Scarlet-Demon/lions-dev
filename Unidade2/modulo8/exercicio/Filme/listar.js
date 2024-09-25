const {filmes} = require('../app')

const listarFilmes = (req, res) => {
    res.status(200).send(filmes)
}

module.exports = listarFilmes 
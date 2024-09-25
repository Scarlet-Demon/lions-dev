const {filmes} = require('../app')

function buscarAno(req, res) {
    const {id} = req.params
    const anos = filmes.filter(filme => filme.idfilmes === parseInt(idfilmes))

    if (anos.lenght >  0) {
        res.status(200).send(anos)
    } else {
        res.status(404).send({mensagem: 'Nenhum Ano Encontrado'})
    }
}

module.exports = buscarAno
const {filmes} = require('../app')

const removerFilmes = (req, res) => {
    const {id} = req.params
    const index = filmes.findIndex((f) => f.id == id)

    if (index === -1) {
        return res.status(404).send({mensagem: 'Filme Não Encontrado'})
    }

    const filmeRemovido = filmes.splice(index, 1) [0]
    res.status(200).send({mensagem: 'Filme Removido com Sucesso!', filme: filmeRemovido})
}
module.exports = removerFilmes
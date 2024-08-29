const {baralhos} = require('../data')

const editarBaralho = (req, res) => {
    const {id} = req.params
    const novoTitulo = req.body.titulo

    const baralho = baralhos.find((b) => b.id == id)

    if (!baralho) {
        return res.status(404).send({mensagem: 'Baralho Não Encontrado'})
    }

    baralho.titulo = novoTitulo 
    res.status(200).send({mensagem: 'Baralho Editado com Sucesso', baralho: baralho})
}

module.exports = editarBaralho
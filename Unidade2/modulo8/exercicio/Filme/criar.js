const {filmes} = require('../app')

function criarFilmes(req, res) {
    console.log(req.body)
    const novoFilme = {
        id: filmes.length +1,
        titulo: req.body.titulo,
        diretor: req.body.diretor,
        ano: req.body.ano,
        genero: req.body.genero,
    }
    filmes.push(novoFilme)
    res.status(201).send({mensagem: 'Filme Cadastrado com Sucesso!', filme: novoFilme})
}
 module.exports = criarFilmes
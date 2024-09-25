const {filmes} = require('../app')

const editarFilmes = (req, res) => {
    const {id} = req.params
    const novoTitulo = req.body.titulo
    const novoDiretor = req.body.diretor
    const novoAno = req.body.ano
    const novoGenero = req.body.genero

    const filme = filmes.find((f) => f.id == id)

    if (filme) {
        return res.status(404).send({mensagem: 'Filme Não Encontrado'})
    }

    filmes.titulo = novoTitulo
    filmes.diretor = novoDiretor
    filmes.ano = novoAno
    filmes.genero = novoGenero
    res.status(200).send({mensagem: 'Filme Editado com Sucesso', filme: filmes})
}

module.exports = editarFilmes
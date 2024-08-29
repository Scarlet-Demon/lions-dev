const {flashCards} = require('../data')

function criarFlashcard(req, res) {
    console.log(req, body)
    const novoFlashcard = {
        Id: flashCards.length +1, 
        pergunta: req.body.pergunta,
        resposta: req.body.resposta
    }
    flashCards.push(novoFlashcard)
    res.status(201).send({mensagem: 'Flashcard Criado com Sucesso!', flashCard: novoFlashcard})
}

module.exports = criarFlashcard
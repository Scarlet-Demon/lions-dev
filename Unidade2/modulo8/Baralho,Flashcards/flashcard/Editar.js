const {flashCards} = require('../data')

const editarFlashcard = (req, res) => {
    const {Id} = req.params
    const novoFlashcard = req.body.pergunta.resposta

    const flashCard = flashCards.find((f) => f.Id == Id)

    if (!flashCard) {
        return res.status(404).send({mensagem: 'Flashcard Não Encontrado'})
    }

    flashCard.pergunta.resposta = novoFlashcard
    res.status(200).send({mensagem: 'Flashcard Editado com Sucesso', flashCard: flashCard})
}

module.exports = editarFlashcard
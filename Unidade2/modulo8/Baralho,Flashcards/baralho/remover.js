const {baralhos, flashcards} = require('../data')

const removerBaralho = (req, res) => {
    const {id} = req.params
    const index = baralhos.findIndex((b) => b.id == id)

    if (index === -1) {
        return res.status(404).send('Baralho Não Encontrado')
    }

    const baralhoRemovido = baralhos.splice(index, 1)[0]

    flashcards.forEach(flashcard, index => {
        if (flashcard.baralhoId == id) {
            flashcards.splice(index, 1)
        }
    });

    res.status(200).send({mensagem: 'Baralho Removido com Sucesso', baralho: baralhoRemovido})
}

module.exports = removerBaralho
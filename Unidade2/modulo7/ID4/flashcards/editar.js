const Flashcards = require('./Flashcards')

function editarFlashcards(index, novaPergunta, novaResposta) {
    Flashcards[index] = novaPergunta, novaResposta
}
module.exports = editarFlashcards
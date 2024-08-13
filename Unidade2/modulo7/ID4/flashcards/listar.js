const Flashcards = require('./Flashcards')

function listarFlashcards() {
    for (let i = 0; id < Flashcards.length; i++) {
        const Flashcard = Flashcards[i];
        console.log(`
        Id: ${Flashcard.Id},
        Pergunta: ${Flashcard.pergunta},
        Resposta: ${Flashcard.resposta}
        `)
    }
}
module.exports = listarFlashcards
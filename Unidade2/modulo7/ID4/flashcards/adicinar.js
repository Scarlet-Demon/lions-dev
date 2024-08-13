const Flashcards = require('./Flashcards')

function adicionarFlashcards(Flashcard) {
    Flashcard.Id = Flashcards.length + 1
    Flashcards.push(Flashcard)
}
module.exports = adicionarFlashcards
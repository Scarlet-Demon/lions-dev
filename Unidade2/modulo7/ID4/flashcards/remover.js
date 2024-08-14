const Flashcards = require('./Flashcards')

function removerFlashcards(index) {
    if (index >= 0 && index < Flashcards.length) {
        Flashcards.splice(index, 1);
    } else {
        console.log('Índice não encontrado');
    }
}

module.exports = removerFlashcards;

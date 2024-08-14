const adicionarFlashcard = require('./adicionarFlashcards');
const listarFlashcards = require('./listarFlashcards');
const editarFlashcard = require('./editarFlashcards');
const removerFlashcard = require('./removerFlashcards');
const Flashcards = require('./Flashcards');

function Menu() {
    console.log(`
    Bem-Vindo ao Menu dos FlashCards
    1. Adicionar Flashcard
    2. Listar Todos os Flashcards
    3. Listar Flashcards por Baralho
    4. Fazer uma Busca por Baralho
    5. Fazer uma Busca por Pergunta
    6. Editar Flashcard
    7. Remover Flashcard
    8. Voltar para o Menu Principal
    `);

    let opcao = prompt('Qual a sua Escolha: ');
    let index, posicao;

    switch (opcao) {
        case '1':
            const pergunta = prompt('Pergunta: ');
            const resposta = prompt('Resposta: ');
            let id = Flashcards.length > 0 ? Flashcards[Flashcards.length - 1].Id + 1 : 1;
            adicionarFlashcard({ Id: id, pergunta: pergunta, resposta: resposta });
            console.log('FlashCard adicionado com sucesso!');
            Menu();
            break;
        case '2':
            listarFlashcards();
            Menu();
            break;
        case '3':
            listarFlashcardsPorBaralho();
            break;
        case '4':
            buscarFlashcardsPorBaralho();
            break;
        case '5':
            buscarFlashcardsPorPergunta();
            break;
        case '6':
            listarFlashcards();
            index = parseInt(prompt('Digite o ID que Deseja Editar: ')) - 1;
            posicao = Flashcards.findIndex(flashcard => flashcard.Id === index + 1);
            if (posicao < 0) {
                console.log('ID não Encontrado, ou não Existente');
            } else {
                const novaPergunta = prompt('Nova Pergunta: ');
                const novaResposta = prompt('Nova Resposta: ');
                editarFlashcard(posicao, novaPergunta, novaResposta);
                console.log('FlashCard Editado com Sucesso');
            }
            Menu();
            break;
        case '7':
            listarFlashcards();
            index = parseInt(prompt('Digite o ID que Deseja Remover: ')) - 1;
            posicao = Flashcards.findIndex(flashcard => flashcard.Id === index + 1);
            if (posicao < 0) {
                console.log('ID não Encontrado, ou não Existente');
            } else {
                removerFlashcard(posicao);
                console.log('FlashCard removido com sucesso!');
            }
            Menu();
            break;
        case '8':
            // Voltar para o menu principal
            break;
        default:
            console.log('Opção Inválida, Por Favor, Tente Novamente');
            Menu();
            break;
    }
}

Menu();

module.exports = Menu;

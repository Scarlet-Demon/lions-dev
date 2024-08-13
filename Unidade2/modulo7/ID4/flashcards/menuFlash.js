const adicionarFlashcards = require('./adiciona')
const listarFlashcards = require('./lista')
const editarFlashcards = require('./edita')  
const removerFlashcards = require('./remove')
const Flashcards = require('./Flashcards')

function Menu() {
    console.log(`
    Bem-Vindo ao Menu dos FlashCards
    1. Adicionar Flashcard
    2. Listar Todos os Flashcards
    3. Listar Flashcards por Baralho
    4. Fazer uma busca por Baralho
    5. Fazer uma busca por Pergunta
    6. Editar Flashcard
    7. Remover Flashcard
    8. Voltar para o Menu Principal
    `)
    let opçao = prompt('Qual a sua Escolha: ')
    let index
    switch (opçao) {
        case '1':
            const pergunta = prompt('Pergunta: ');
            const resposta = prompt('Resposta: ');
            let Id = Flashcards[Flashcards.length - 1].Id + 1
            adicionarFlashcards({ id: Id, Pergunta: pergunta, resposta: resposta});
            console.log('FlashCard adicionado com sucesso!');
            Menu()
            break;
        case '2':
            listarFlashcards()
            Menu()
            break;
        case '3':
            break;
        case '4':
            break;
        case '5':
            break;
        case '6':
            listarFlashcards()
            index = parseInt(prompt('Digite o ID que Deseja Editar: ')) - 1
            posicao = usuarios.findIndex(usuarios => usuarios.Id == index)
            if (posicao < 0 || posicao >= usuarios.length) {
                console.log('Id não Encontrado, ou não Existente')
                exibirMenu()
            } else {
                const novaPergunta = prompt('Pergunta: ');
                const novaResposta = prompt('Resposta: ')
                editarFlashcards( index, {id: baralhos[index].Id, Pergunta: novaPergunta, resposta: novaResposta})
                console.log('FlashCard Editado com Sucesso')
            }
            Menu()
            break;
        case '7':
            listarFlashcards()
            index = parseInt(prompt('Digite o ID que Deseja Remover: ')) - 1;
            posicao = baralhos.findIndex(baralhos => baralhos.Id == index)
            if (posicao < 0 || posicao >= baralhos.length) {
                console.log('Id não Encontrado, ou não Existente')
                exibirMenu()
            } else {
                removerFlashcards(FlashCards, posicao)
            }
            console.log('FlashCard removido com sucesso!');
            Menu();
            break;
        case '8':
            exibirMenu()
            break;
        default:
            console.log('Opção Invalida, Por Favor, Tente Novamente')
            Menu()
            break;
    }
}

Menu()

module.exports = Menu
const prompt = require('prompt-sync')();
const adicionarBaralho = require('./adicionar');
const listarBaralho = require('./listar');
const editarBaralho = require('./editar');
const removerBaralho = require('./remover');
const baralhos = require('./baralhos');
const Menu = require('./flashcards/menuFlash');

function exibirMenu() {
    console.log(`
    Bem-Vindo ao Meu Aprendizado.com
    1. Adicionar Baralho
    2. Listar Baralhos
    3. Editar Baralho
    4. Remover Baralho
    5. Ir para o Menu dos FlashCards
    6. Sair
    `);
    let opcao = prompt('Qual a sua Escolha: ');
    let posicao;
    switch (opcao) {
        case '1':
            const titulo = prompt('Título: ');
            let id = baralhos.length > 0 ? baralhos[baralhos.length - 1].id + 1 : 1;
            adicionarBaralho({ id: id, titulo: titulo });
            console.log('Baralho adicionado com sucesso!');
            exibirMenu();
            break;
        case '2':
            listarBaralho();
            exibirMenu();
            break;
        case '3':
            listarBaralho();
            let index = parseInt(prompt('Digite o ID que Deseja Editar: ')) - 1;
            posicao = baralhos.findIndex(baralho => baralho.id === index + 1);
            if (posicao < 0) {
                console.log('ID não Encontrado, ou não Existente');
            } else {
                const novoTitulo = prompt('Título: ');
                editarBaralho(posicao, novoTitulo);
                console.log('Baralho Editado com Sucesso');
            }
            exibirMenu();
            break;
        case '4':
            listarBaralho();
            let removeIndex = parseInt(prompt('Digite o ID que Deseja Remover: ')) - 1;
            posicao = baralhos.findIndex(baralho => baralho.id === removeIndex + 1);
            if (posicao < 0) {
                console.log('ID não Encontrado, ou não Existente');
            } else {
                removerBaralho(posicao);
                console.log('Baralho removido com sucesso!');
            }
            exibirMenu();
            break;
        case '5':
            Menu();
            break;
        case '6':
            console.log('Saindo...');
            break;
        default:
            console.log('Opção Inválida, Por Favor, Tente Novamente');
            exibirMenu();
            break;
    }
}

exibirMenu();

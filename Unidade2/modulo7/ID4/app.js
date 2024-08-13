const prompt = require('prompt-sync') ()
const adicionarBaralho = require('./adicionar')
const listarBaralho = require('./listar') 
const editarBaralho = require('./editar') 
const removerBaralho = require('./remover')
const baralhos = require('./baralhos')
const Menu = require('./flashcards/menuFlash')

function exibirMenu() {
    console.log(`
    Bem-Vindo ao Meu Apredizado.com
    1. Adicionar Baralho
    2. Listar Baralhos
    3. Ediatr Baralho
    4. Remover Baralho
    5. Ir para o Menu dos FlashCards
    6. Sair
    `)
    let opçao = prompt('Qual a sua Escolha: ') 
    let index
    switch (opçao) {
        case '1':
            const titulo = prompt('Titulo: ');
            let id = baralhos[baralhos.length - 1].id + 1
            adicionarBaralho({ id: id, titulo: titulo});
            console.log('Bralho adicionado com sucesso!');
            exibirMenu()
            break;
        case '2':
            listarBaralho()
            exibirMenu()
            break;
        case '3':
            listarBaralho()
            index = parseInt(prompt('Digite o ID que Deseja Editar: ')) - 1
            posicao = usuarios.findIndex(usuarios => usuarios.id == index)
            if (posicao < 0 || posicao >= usuarios.length) {
                console.log('Id não Encontrado, ou não Existente')
                exibirMenu()
            } else {
                const novoTitulo = prompt('titulo: ');
                editarBaralho( index, {id: baralhos[index].id, titulo: novoTitulo})
                console.log('Baralho Editado com Sucesso')
            }
            exibirMenu()
            break;
        case '4':
            listarBaralho()
            index = parseInt(prompt('Digite o ID que Deseja Remover: ')) - 1;
            posicao = baralhos.findIndex(baralhos => baralhos.id == index)
            if (posicao < 0 || posicao >= baralhos.length) {
                console.log('Id não Encontrado, ou não Existente')
                exibirMenu()
            } else {
                removerBaralho(baralhos, posicao)
            }
            console.log('Baralho removido com sucesso!');
            exibirMenu();
            break;
        case '5':
            Menu()
            break;
        case '6':
            break;
        default:
            console.log('Opção Invalida, Por Favor, Tente Novamente')
            exibirMenu()
            break;
    }
}

exibirMenu()
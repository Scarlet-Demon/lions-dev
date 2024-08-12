const prompt = require('prompt-sync') ()
const cadastrarUsuario = require('./cadastrar')
const listarUsuarios = require('./listar') 
const editarUsuario = require('./editar') 
const cancelarUsuario = require('./cancelar')
const usuarios = require('./usuarios')

function exibirMenu() {
    console.log(`
    Bem-Vindo ao Condominio Campos Elíseos
    1. Cadastrar Morador
    2. Listar Moradores
    3. Ediatr Moradores
    4. Remover Morador
    5. Sair
    `)
    let opçao = prompt('Qual a sua Escolha: ') 
    let index
    switch (opçao) {
        case '1':
            const nome  = prompt('Qual o Nome: ')
            const email = prompt('Qual o Email: ')
            const telefone = prompt('Qual o Telefone: ')
            let id = usuarios[usuarios.length - 1].id + 1
            cadastrarUsuario(usuarios, {id: id, nome: nome, email: email, telefone: telefone})
            console.log('Usuário Cadastrado')
            exibirMenu()
            break;
        case '2':-
            listarUsuarios()
            exibirMenu()
            break;
        case '3':
            listarUsuarios()
            index = parseInt(prompt('Digite o Numero que Deseja Editar: ')) -1
            const novoNome  = prompt('Qual o Nome: ')
            const novoEmail = prompt('Qual o Email: ')
            const novoTelefone = prompt('Qual o Telefone: ')
            editarUsuario(index, { nome: novoNome, email: novoEmail, telefone: novoTelefone})
            console.log('Morador Editado com Sucesso')
            exibirMenu()
            break;
        case '4':
            listarUsuarios()
            index = parseInt(prompt('Número do contato a remover: ')) - 1;
            cancelarUsuario(index);
            console.log('Contato removido com sucesso!');
            exibirMenu();
            break;
        case '5':
            break;
        default:
            console.log('Opção Invalida, Por Favor, Tente Novamente')
            exibirMenu()
            break;
    }
}

exibirMenu()

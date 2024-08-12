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
            const nome = prompt('Nome: ');
            let telefones = [];
            let telefone;
            let id = usuarios[usuarios.length - 1].id + 1
            while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            telefones.push(telefone);
            }
            const email = prompt('Email: ');
            cadastrarUsuario({ id: id, nome: nome, email: email, telefones:telefones });
            console.log('Contato adicionado com sucesso!');
            exibirMenu()
            break;
        case '2':
            listarUsuarios()
            exibirMenu()
            break;
        case '3':
            listarUsuarios()
            index = parseInt(prompt('Digite o ID que Deseja Editar: ')) 
            const novoNome = prompt('Nome: ');
            let Telefones = [];
            let novoTelefone;
            while ((novoTelefone = prompt('Telefone (ou deixe em branco para sair): '))) {
            Telefones.push(novoTelefone);
            }
            const novoEmail = prompt('Email: ');
            editarUsuario( index, {nome: novoNome, email: novoEmail, telefones: Telefones})
            console.log('Contato Editado com Sucesso')
            exibirMenu()
            break;
        case '4':
            listarUsuarios()
            index = parseInt(prompt('Digite o ID que Deseja Remover: ')) - 1;
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
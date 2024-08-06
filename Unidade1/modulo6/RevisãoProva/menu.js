const prompt = require('prompt-sync') ()
const cadastrarResidencias = require('./cadastrar')
const listarResidencias = require('./listar') 
const editarResidencias = require('./editar') 
const removerResidencias = require('./cancelar')

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
            const bairro  = prompt('Qual o Bairro do Morador: ')
            const rua = prompt('Qual a Rua do Morador: ')
            const numero = prompt('Qual o Numero da Casa do Morador: ')
            const morador = prompt('Qual o Nome do Morador: ')
            cadastrarResidencias({ bairro, rua, numero, morador })
            console.log('Morador Cadastrado')
            exibirMenu()
            break;
        case '2':
            listarResidencias()
            exibirMenu()
            break;
        case '3':
            listarResidencias()
            index = parseInt(prompt('Digite o Numero que Deseja Editar: ')) -1
            let novoBairro  = prompt('Qual o Novo Bairro do Morador: ')
            let novaRua = prompt('Qual a Nova Rua do Morador: ')
            let novoNumero = prompt('Qual o Novo Numero da Casa do Morador: ')
            let novoMorador = prompt('Qual o Novo Nome do Morador: ')
            editarResidencias(index, {bairro: novoBairro, rua: novaRua, numero: novoNumero, morador: novoMorador})
            console.log('Morador Editado com Sucesso')
            exibirMenu()
            break;
        case '4':
            listarResidencias()
            index = parseInt(prompt('Número do contato a remover: ')) - 1;
            removerResidencias(index);
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
module.exports = exibirMenu

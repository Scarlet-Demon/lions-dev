const cadastrarResidencias = require('./cadastrar')
const listarResidencias = require('./listar') 
const editarResidencias = require('./editar') 
const removerResidencias = require('./remover')

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
    switch (opçao) {
        case '1':
            cadastrarResidencias(exibirMenu)
            break;
        case '2':
            listarResidencias()
            exibirMenu()
            break;
        case '3':
            listarResidencias()
            editarResidencias(exibirMenu)
            break;
        case '4':
            listarResidencias()
            removerResidencias(exibirMenu)
            break;
        case '5':
            return
            break;
        default:
            console.log('Opção Invalida, Por Favor, Tente Novamente')
            exibirMenu()
            break;
    }
}
module.exports = exibirMenu
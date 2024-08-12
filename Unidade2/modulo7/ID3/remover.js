const usuarios = require("./usuarios")

function removerUsuario(posicao) {
    usuarios.splice(posicao, 1)
    let resposta = []
    if (resposta == 0) {
        console.log('Deseja mesmo Remover este Contato? (sim/não)')
    } else if (resposta.toLowerCase() == 'sim') {
        console.log('Contato Removido com Sucesso')
    } else {
        console.log('Este Contato ainda Esta em sua Lista de Contatos')
    }
}
module.exports = removerUsuario
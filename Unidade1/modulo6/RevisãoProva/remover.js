function removerResidencias(callback) {
    let editar = prompt('Digite o Numero que Deseja Editar: ')
    const index = parseInt(editar) -1
    if (residencias.length == 0) {
        console.log('Residencia Não Encontrada, Por Favor, Tente Novamente')
        removerResidencias()
    } else if (index >= 0 && index < residencias.length) {
        residencias.splice(index, 1)
        console.log('Morador Removido com Sucesso')
    }
    callback()
}
module.exports = removerResidencias
function editarResidencias(callback) {
    let editar = prompt('Digite o Numero que Deseja Editar: ')
    const index = parseInt(editar) -1
    if (index < 0 || index >= residencias.length) {
        console.log('Residencia Não Encontrada, Por Favor, Tente Novamente')
        editarResidencias()
    } else {
        let bairro  = prompt('Qual o Novo Bairro do Morador: ')
        let rua = prompt('Qual a Nova Rua do Morador: ')
        let numero = prompt('Qual o Novo Numero da Casa do Morador: ')
        let morador = prompt('Qual o Novo Nome do Morador: ')
        residencias[index] = {bairro, rua, numero, morador}
        console.log('Morador Editado com Sucesso')
    }
    callback()
}
module.exports = editarResidencias
function cadastrarResidencias(callback) {
    let bairro  = prompt('Qual o Bairro do Morador: ')
    let rua = prompt('Qual a Rua do Morador: ')
    let numero = prompt('Qual o Numero da Casa do Morador: ')
    let morador = prompt('Qual o Nome do Morador: ')
    residencias.push({bairro, rua, numero, morador})
    console.log('Morador Cadastrado')
    callback()
}
module.exports = cadastrarResidencias
const baralhos = require('./baralhos')

function editarBaralho(index, novoTitulo) { 
    baralhos[index] = novoTitulo

}
module.exports = editarBaralho
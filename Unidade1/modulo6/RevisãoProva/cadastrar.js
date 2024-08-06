function cadastrarResidencias(residencia) {
    let id = residencia[residencias.length - 1].id + 1
    residencias.push(residencia)
}
module.exports = cadastrarResidencias

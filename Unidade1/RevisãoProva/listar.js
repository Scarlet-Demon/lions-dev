function listarResidencias() {
    if (residencias.length == 0) { 
        console.log('Não A Moradores Cadastrados')
        callback()
    } else {
        residencias.forEach((residencia, index) => {
            console.log(`${index + 1}, ${residencia.bairro}, ${residencia.rua}, ${residencia.numero}, ${residencia.morador}`)
        });
    }
}
module.exports = listarResidencias
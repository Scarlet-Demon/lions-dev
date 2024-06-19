let cores_favoritas = ["preto",  "azul",  "verde"]
let coresEspeciais = []
let corDoUsuario

console.log('qual a sua cor favorita?')

process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
}) 

function processamento(corDoUsuario ) {
    if (cores_favoritas.includes(corDoUsuario)) {
        console.log('a sua cor é uma das favoritas da turma!')
    } else {
        console.log(`a sua cor é diferente, vamos adicionala á lista!!!`)
        coresEspeciais.push(corDoUsuario)
        console.log(`as cores favoritas são: ${cores_favoritas}`)
        console.log(`as cores especiais são: ${coresEspeciais}`)
        console.log(`o total de cores favoritas são: ${cores_favoritas.length}`)
    }
}

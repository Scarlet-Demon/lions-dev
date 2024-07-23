let numero

console.log('digite o numero aqui')
process.stdin.once('data', function(data) {
    numero = data.toString().trim()
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    let resposta = numero /2 
if (numero == 0) {
    console.log('o numero digitado é zero.')
} else if (numero % 2 == 0) {
    console.log('o numero digitado é par.')
} else {
    console.log('o numero digitado é impar.')
}
}

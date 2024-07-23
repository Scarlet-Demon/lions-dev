let numero

console.log('digite o numero aqui')
process.stdin.once('data', function(data) {
    numero = data.toString().trim()
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    let resposta = numero /5 
 if (numero % 5 == 0) {
    console.log(`o numero ${numero} é divisivel por cinco`)
} else {
    console.log(`o numero ${numero} não é divisivel por cinco`)
}
}
let tabuada

console.log('insira o valor da tabuada?')
process.stdin.once('data', function(data) {
    tabuada = parseInt(data.toString().trim())
    processamento(tabuada)
    process.exit()
})

function processamento(tabuada) {
    for (i = 0; i <= 10; i++)
        console.log(`a tabuada atual é ${i*tabuada}`)
}
let resposta 

console.log('voce gosta de cafe?')
process.stdin.once('data', function(data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit() 
}) 

function processamento(resposta) {
    if (resposta == 'sim', 'Sim', 'S', 's') {
        gostaDeCafe = true
    } else {
        gostaDeCafe = false
    }
if (gostaDeCafe == true) {
    console.log('que legal, eu tambem gosta de cafe')
} else {
    console.log('poxa q pena, cafe é tão bom')
}
}

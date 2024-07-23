let notas = []
let prova1
let prova2

console.log('primeira nota')
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('segunda nota')

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})

function processamento(prova1, prova2) {
   notas.push(prova1)
   notas.push(prova2)
   let medias = (notas[0]+notas[1])/2
   console.log(`a media das provas são: ${medias} e as notas são ${notas}`)
}

let nome 
let nota1
let nota2

console.log('qual o seu nome?')
process.stdin.once('data', function(data) {
    nome = (data.toString().trim())
    console.log('qual a sua primeira nota?')

    process.stdin.once('data', function(data) {
        nota1 = parseFloat(data.toString().trim())
        console.log('qual a sua segunda nota?')

        process.stdin.once('data', function(data) {
            nota2 = parseFloat(data.toString().trim())
            processamento(nome, nota1, nota2)
            process.exit()
        })
    })
})

function processamento(nome, nota1, nota2) {
    let media =(nota1+nota2)/2
    if (media < 6) {
        console.log(`que pena, ${nome}, ficou de recuperação, pois sua nota foi: ${media}`)
    } else {
        console.log(`parabens, ${nome}, passou de ano, pois sua nota foi: ${media}`)
    }
}
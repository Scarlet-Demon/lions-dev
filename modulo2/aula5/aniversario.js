let nome 
let idade

console.log('qual o seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual a sua idade?')

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})
function processamento(nome, idade) {
    let ano = 2024-idade
    console.log(`ola ${nome}, se voce fez aniversario: ${ano} anos, se voce não fez aniversaria: ${ano-1}`)
}

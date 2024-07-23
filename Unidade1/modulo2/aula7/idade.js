let nome 
let idade

console.log('qual o seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual a sua idade?')
    
process.stdin.once('data', function(data) {
    idade = parseInt(data.toString().trim())
    processameto(nome, idade)
    process.exit()
})
})

function processameto(nome, idade) {
    if (idade >= 18) {
        console.log('voce é maior de idade!')
    } else {
        console.log(`voce é menor de idade, atingira a maioridade em ${18-idade} anos`)
    }
}
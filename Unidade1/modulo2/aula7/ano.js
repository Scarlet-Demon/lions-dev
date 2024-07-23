let nome 
let idade
let resposta 

console.log('qual o seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('qual a sua idade?')

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        console.log('voce já fez aniversario?')

        process.stdin.once('data', function(data) {
            resposta = data.toString().trim()
            processamento(nome, idade, resposta)
            process.exit()
        }) 
    })
})
function processamento(nome, idade, resposta) {
    let ano = 2024-idade
    if (resposta == 'sim') {
        console.log(`ola ${nome} , você nasceu no ano ${ano}, e tem ${idade} anos`)
    } else {
        console.log(`ola ${nome} , você nasceu no ano ${ano-1}, e tem ${idade} anos,`)
    }
}
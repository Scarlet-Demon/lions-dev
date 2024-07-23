let opções = ['pedra','papel','tesoura']
let computador = []
let usuario = []
resultado = []

console.log('faça sua escolha?')
process.stdin.once('data', function(data){
    usuario = data.toString().trim()
    computador = opções[Math.floor(Math.random() * opções.length)]
    processamento(usuario, computador)
    console.log(`a escolha do computador foi ${computador}`)
console.log(`a escolha do usuario foi ${usuario}`)
console.log(resultado)
    process.exit()
})

function processamento(usuario, computador){
    if(usuario == computador){
        resultado = 'empate.'
    }else if(usuario == 'pedra' && computador == 'tesoura' || usuario == 'tesoura' && computador == 'papel' || usuario == 'papel' && computador == 'pedra'){
        resultado = 'voce venceu!!!'
    }else {
    resultado = 'voce perdeu!!!'
    }
}

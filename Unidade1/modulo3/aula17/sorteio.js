const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let aleatorio = Math.floor(Math.random() * 100)+1

function palpite() {
rl.question('qual o numero que voce acha que é?', (valor) => {
if (aleatorio>valor) {
console.log('voce errou o numero, é mais para cima')
palpite()
} else if(aleatorio<valor){
console.log('voce errou o numero, é mais para baixo')
palpite()
} else {
    console.log(`voce acertou o numero é ${aleatorio}`)
    rl.close()
}
}
)}
palpite()

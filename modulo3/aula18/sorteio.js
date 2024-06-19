const readline = require ('readline')

const rl = readline. createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'boas vindas!'
})

let acertos = 0 
let aleatorio = Math.floor(Math.random() * 100)+1
let tentativas = 10
console.log(`bem-vindo!!!\n voce tem ${tentativas} tentativas.`)

function palpite() { 
    if (tentativas > 0) {
        rl.question('qual o numero que voce acha que é?', (valor) => {
            switch (true) {
                case (aleatorio>valor):
                    acertos++
                    tentativas--
                    console.log(`voce errou, o numero é mais para cima. Voce tem ${tentativas} tentativas restantes`)
                    palpite()
                    break;
                case (aleatorio<valor):
                    acertos++
                    tentativas--
                    console.log(`voce errou, o numero é mais para baixo. Voce tem ${tentativas} tentativas restantes`)
                    palpite()
                    break;
                case (aleatorio==valor):
                    console.log(`voce acertou, o numero é ${aleatorio} e voce demorou ${acertos} vezes`)
                    rl.close()
                    break
                default:
                    console.log(`numero inválido`)
                    palpite()
                    break
            }
        })
    } else {
        console.log(`voce perdeu todas as suas tentavivas, o numero era ${aleatorio}`)
          rl.close()
    }
}
palpite()
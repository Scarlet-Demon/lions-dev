let nome = ''
console.log('Olá, qual o seu nome?')
process.stdin.on('data', function(data) {
    let nome = data.toString();
    let saudação = ('Bem-Vindo, ' + nome)
    console.log(saudação)
    process.exit();
})
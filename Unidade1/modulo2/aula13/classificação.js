let nota
let classificacão 

console.log('insira a sua nota')

process.stdin.once('data', function(data) {
    nota = data.toString().trim()
    nota = classificação(nota)
    if (nota == 'A'|| nota == 'B' || nota == 'C') {
        console.log(`voce foi aprovado: ${nota}`)
        process.exit()
    } else if (nota == 'D' || nota == 'E' || nota == 'F') {
        console.log(`voce foi reprovado: ${nota}`)
        process.exit()
    } else
    process.exit()
}) 

function classificação(nota) {
    switch (true) {
        case (nota >= 90 && nota <= 100):
            return 'A';
            break;
        case (nota >= 80 && nota <= 89 ):
             return 'B';
             break;
        case (nota >= 70 && nota <= 79):
             return 'C';
             break;
        case (nota >= 60 && nota <= 69):
             return 'D';
            break;
        case (nota >= 50 && nota <= 59):
             return 'E';
             break;
        case (nota >= 0 && nota <= 49):
             return 'F';
             break;
        default:
            console.log('Nota invalida')
           break;
    }
}
let soma_pares = 0
let soma_impares = 0
let total_pares = 0
let total_impares = 0

    for (let i = 0; i <= 999; i++) {
        if(i % 2 == 0 ) {
            soma_pares += i
            total_pares ++
        } else {
            soma_impares += i
            total_impares ++
        }
    }
    let media_pares = soma_pares / total_pares
    let media_impares = soma_impares / total_impares

    if (soma_pares > soma_impares) {
        console.log('a soma dos pares é maior ')
    } else {
        console.log('a soma dos impares é maior')
    }
console.log(`a soma dos pares é ${soma_pares}`)
console.log(`a soma dos impares é ${soma_impares}`)
console.log(`o total de numeros pares é de ${total_pares}`)
console.log(`o total de impares é de ${total_impares}`)
console.log(`A media dos numeros pares é de ${media_pares}`)
console.log(`a media doos numeros impares é de ${media_impares}`)
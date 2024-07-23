let numeros = [27,10,3,0,20,5,6,3]
let numeros_impares = []
let numeros_pares = []

numeros.push(18)

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        numeros_impares.push(numeros[i])
    } else if (numeros[i] % 2 == 0) {
        numeros_pares.push(numeros[i])
    }
    
}
console.log(`${numeros}`)
console.log(`${numeros_impares}`)
console.log(`${numeros_pares}`)
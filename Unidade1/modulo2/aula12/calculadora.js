let valor1
let valor2
let valor3

console.log(calculadora(5, 3, '+'))
console.log(calculadora(5, 3, '-'))
console.log(calculadora(5, 3, '*'))
console.log(calculadora(5, 3, '/'))

function calculadora(valor1, valor2, valor3) {
    if (valor3 == '+'){
        return valor1+valor2
    } else if (valor3 == '-') {
        return valor1-valor2
    } else if ( valor3 == '*') {
        return valor1*valor2
    } else if (valor3 == '/') {
        return valor1/valor2
    }
}
let valor1
let valor2
let valor3

console.log(calculadora(5, 3, '+'))
console.log(calculadora(5, 3, '-'))
console.log(calculadora(5, 3, '*'))
console.log(calculadora(5, 3, '/'))

function calculadora(valor1, valor2, valor3) {
    switch (valor3) {
        case '+':
            return valor1+valor2
        
        case '-':
            return valor1-valor2
        
        case '*':
            return valor1*valor2
        
        case '/': 
            return valor1+valor2
    }
}
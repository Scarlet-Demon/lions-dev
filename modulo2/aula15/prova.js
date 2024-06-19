let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let soma = 0
let media = 0
let maxima = notas[0]
let minima = notas [0]
let acimaMedia = 0
let abaixoMedia = 0


for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}
media = soma / notas.length

for (let i = 0; i < notas.length; i++) {
    if (maxima < notas[i]) {
        maxima = notas[i]
    } else if (minima > notas[i]) {
        minima = notas[i]
    }
}

notas.push(8.0)

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= media) {
        acimaMedia++
    }
    if (notas[i] < 6.0) {
        abaixoMedia++
}
}
console.log(media)
console.log(maxima)
console.log(minima)
console.log(acimaMedia)
console.log(abaixoMedia)
console.log(`${notas}`)

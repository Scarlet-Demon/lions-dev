let notas = [55,30,86,91,10,69,48,72,24,100]
let media_total = 0
let maior = notas[0]
let menor = notas[0]
let acimaMedia = 0
let abaixoMedia = 0

for (let i = 0; i < notas.length; i++) {
    media_total+=notas[i]
    }
for (let i = 0; i < notas.length; i++) {
    if(maior<notas[i]){
    maior = notas[i]
    } else if(menor>notas[i]) {
    menor = notas[i]   
    } 
}

media_total=media_total/notas.length
console.log(`${media_total}`)
console.log(`${maior}, ${menor}`)

notas.push(66)

for (let i = 0; i < notas.length; i++) {
    if (notas[i]>= media_total) {
        acimaMedia++
    }
    if (notas[i]< 80) {
        abaixoMedia++
    }
    
}
console.log(`${acimaMedia}`)
console.log(`${abaixoMedia}`)
console.log(`${notas}`)
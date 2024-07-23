let dado 
let aleatorio

console.log('quantos lados tem esse dado?')

process.stdin.once('data', function(data) {
    dado = parseInt(data.toString().trim())
    aleatorio = Math.floor(Math.random() * dado) +1
    console.log(aleatorio)
    process.exit()
}) 

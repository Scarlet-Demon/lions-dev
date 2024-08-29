const express = require('express')
const app = express()
const port = 3000

app.get('/oi', (req, res) => {
    res.send('Bem-Vindo, que que você está aqui ')
})

app.get('/sobre', (req, res) => {
    res.send('Adeus, foi muito bom enquanto durou')
})

app.use('/', (req, res) => {
    res.status(404).send('Ocorreu um Erro, Lamentamos muito por isso, ERROR: 404')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
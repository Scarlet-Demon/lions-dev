const { error } = require('console')
const express = require('express')
const app = express()
const port = 3000
const senha = "salve"

app.use((req, res, next) => {
    if (req.headers['palavra-secreta']!=senha) {
        res.status(403).send('Acesso Negado: Token Inválido')
        throw new error('Palavra Secreta Inválida')
    } else {
        next()
    }
})

app.get('/', (req, res) => {
    res.send('Sua Presença foi Confirmada!')
    console.log('Palavra Secreta:', req.headers['palavra-secreta'])
})

app.listen(port, () => {
    console.log(`Servidor Rodando em http://localhost:${port} `)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Algo de Errado, Não esta Certo!')
})

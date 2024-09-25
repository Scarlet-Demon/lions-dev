const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const criarFilmes = require('./Filme/criar')
app.post('/criar', criarFilmes)

const listarFilmes = require('./Filme/listar')
app.get('/listar', listarFilmes)

const editar = require('./Filme/editar')
app.put('/editar/:id', editar)

const remover = require('./Filme/remover')
app.delete('/remover/:id', remover)

const buscarAno = require('./Filme/buscar')
app.get('/buscar', buscarAno)


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

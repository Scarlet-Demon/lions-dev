const express = require('express')
const app = express()
const port = 3000

const criar = require('./baralho/criar')
app.post('./baralho', criar)

const Criar = require('./flashcard/Criar')
app.post('./flashcard', Criar)

const listar = require('./baralho/listar')
app.get('./baralho', listar)

const Listar = require('./flashcard/Listar')
app.get('./flashcard', Listar)

const editar = require('./baralho/editar')
app.put('./baralho', editar)

const Editar = require('./flashcard/Editar')
app.put('./flashcard/:Id', Editar)

const remover = require('./baralho/remover')
app.delete('./baralho/:id', remover)

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor  Express está funcionado!')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost${port}`)
})
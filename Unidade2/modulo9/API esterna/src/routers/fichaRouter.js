const express = require('express')
const router = express.Router()
const fichasControllers = require("../controllers/fichasControllers")

router.get('/', fichasControllers.listarFichas)
router.post('/', fichasControllers.criarFicha)
router.put('/:id', fichasControllers.atualizarFicha)
router.delete('/:id', fichasControllers.removerFicha)

module.exports = router
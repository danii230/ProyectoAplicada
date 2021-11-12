const express = require('express')
const controller = require('../controllers/funcionarioController')

const router = express.Router()

const path = 'funcionario'

router.get(
    `/${path}`,
    controller.getFuncionario
)

router.post(
    `/${path}`,
    controller.ingresarFuncionario
)

router.delete('/funcionario/:idFuncionario/', controller.eliminarFuncionario);

router.put(
    `/${path}`,
    controller.modificarFuncionario
)

router.get(
    `/${path}/:id`,
    controller.getFuncionarioId,
)


module.exports = router

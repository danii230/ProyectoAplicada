const express = require('express')

const controller = require('../controllers/departamentoController')


const router = express.Router()

const path = 'departamento'

router.get(
    `/${path}`,
    controller.getDepartamento
)

router.post(
    `/${path}`,
    controller.ingresarDepartamento
)

router.delete(
    `/${path}`,
    controller.eliminarDepartamento
)
router.put(
    `/${path}`,
    controller.modificarDepartamento
)

router.get(
    `/${path}/:id`,
    controller.getDepartamentoId,
)


module.exports = router

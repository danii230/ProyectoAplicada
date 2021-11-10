const express = require('express')

const controller = require('../controllers/sexoController')


const router = express.Router()

const path = 'sexo'

router.get(
    `/${path}`,
    controller.getSexo
)

router.post(
    `/${path}`,
    controller.ingresarSexo
)

router.delete(
    `/${path}`,
    controller.eliminarSexo
)
router.put(
    `/${path}`,
    controller.modificarSexo
)

router.get(
    `/${path}/:id`,
    controller.getSexoId,
)


module.exports = router

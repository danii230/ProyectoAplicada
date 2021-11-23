const express = require('express')

const controller = require('../controllers/avanceController')


const router = express.Router()

const path = 'avance'

router.get(
    `/${path}`,
    controller.getAvance
)

router.post(
    `/${path}`,
    controller.ingresarAvance
)


router.delete('/avance/:idAvance/:idUsuarioAplicativo/', controller.eliminarAvance);

router.put(
    `/${path}`,
    controller.modificarAvance
)

router.get(
    `/${path}/:id`,
    controller.getAvanceId,
)


module.exports = router

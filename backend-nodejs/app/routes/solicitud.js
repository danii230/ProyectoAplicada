const express = require('express')

const controller = require('../controllers/solicitudController')


const router = express.Router()

const path = 'solicitud'

router.get(
    `/${path}`,
    controller.getSolicitud
)

router.post(
    `/${path}`,
    controller.ingresarSolicitud
)


router.delete('/solicitud/:idSolicitud/', controller.eliminarSolicitud);

router.put(
    `/${path}`,
    controller.modificarSolicitud
)

router.get(
    `/${path}/:id`,
    controller.getSolicitudId,
)


module.exports = router

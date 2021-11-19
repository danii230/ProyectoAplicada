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

// router.put(
//     `/${path}`,
//     controller.eliminarSolicitud
// )

router.delete('/solicitud/:idSolicitud/:idUsuarioAplicativo/', controller.eliminarSolicitud);

router.put(
    `/${path}`,
    controller.modificarSolicitud
)

router.get(
    `/${path}/:id`,
    controller.getSolicitudId,
)


module.exports = router

const express = require('express')

const controller = require('../controllers/bitacoraAuditoriaController')


const router = express.Router()

const path = 'bitacoraAuditoria'

router.get(
    `/${path}`,
    controller.getBitacoraAuditoria
)

router.post(
    `/${path}`,
    controller.ingresarBitacoraAuditoria
)


router.delete('/bitacoraAuditoria/:idBitacoraAuditoria/', controller.eliminarBitacoraAuditoria);

router.put(
    `/${path}`,
    controller.modificarBitacoraAuditoria
)

router.get(
    `/${path}/:id`,
    controller.getBitacoraAuditoriaId,
)


module.exports = router

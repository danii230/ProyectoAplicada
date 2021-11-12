const express = require('express')

const controller = require('../controllers/transaccionController')


const router = express.Router()

const path = 'transaccion'

router.get(
    `/${path}`,
    controller.getTransaccion
)

router.post(
    `/${path}`,
    controller.ingresarTransaccion
)

router.delete(
    `/${path}`,
    controller.eliminarTransaccion
)
router.put(
    `/${path}`,
    controller.modificarTransaccion
)

router.get(
    `/${path}/:id`,
    controller.getTransaccionId,
)


module.exports = router

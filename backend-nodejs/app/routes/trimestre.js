const express = require('express')

const controller = require('../controllers/trimestreController')


const router = express.Router()

const path = 'trimestre'

router.get(
    `/${path}`,
    controller.getTrimestre
)

router.post(
    `/${path}`,
    controller.ingresarTrimestre
)

router.delete(
    `/${path}`,
    controller.eliminarTrimestre
)
router.put(
    `/${path}`,
    controller.modificarTrimestre
)

router.get(
    `/${path}/:id`,
    controller.getTrimestreId,
)


module.exports = router

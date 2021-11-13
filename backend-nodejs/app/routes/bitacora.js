const express = require('express')

const controller = require('../controllers/bitacoraController')


const router = express.Router()

const path = 'bitacora'

router.post(
    `/${path}`,
    controller.ingresarBitacora
)



module.exports = router

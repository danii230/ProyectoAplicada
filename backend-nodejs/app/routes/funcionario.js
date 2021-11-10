const express = require('express')
const controller = require('../controllers/funcionarioController')

const router = express.Router()

const path = 'funcionario'

router.get(
    `/${path}`,
    controller.getData
)


module.exports = router

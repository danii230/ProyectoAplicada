const { Router } = require('express');
const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginController');

 router.get('/login/:loginName/:password/', controller.login);

module.exports = router;

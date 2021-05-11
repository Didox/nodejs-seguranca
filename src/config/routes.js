const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/login_controller');

router.get('/', LoginController.index);

module.exports = router;

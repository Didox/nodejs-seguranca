const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login_controller');
const HomeController = require('../controllers/home_controller');

router.get('/', HomeController.index);
router.get('/login', LoginController.index);

module.exports = router;

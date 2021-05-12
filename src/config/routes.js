const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login_controller');
const UsuariosController = require('../controllers/usuarios_controller');

router.get('/', UsuariosController.index);
router.get('/login', LoginController.index);
router.get('/logar', LoginController.logar);
router.get('/sair', LoginController.deslogar);

module.exports = router;

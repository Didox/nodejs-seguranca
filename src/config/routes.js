const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login_controller');
const UsuariosController = require('../controllers/usuarios_controller');

var Recaptcha = require('express-recaptcha').RecaptchaV3;
var recaptcha = new Recaptcha('6LfX4dEaAAAAAMNzFQGXes4jC-pHTWGRkBaw5Bvo', '6LfX4dEaAAAAAJ70jUA2jgqVJton01P90vZFCt2w', {callback:'cb'});

router.get('/', UsuariosController.index);
router.get('/usuarios', UsuariosController.index);
router.get('/usuarios/:id/editar', UsuariosController.editar);
router.post('/usuarios/:id', UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', UsuariosController.excluir);
router.get('/login', recaptcha.middleware.render, LoginController.index);
router.post('/logar', recaptcha.middleware.verify, LoginController.logar);
router.get('/sair', LoginController.deslogar);

module.exports = router;

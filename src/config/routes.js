const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login_controller');
const UsuariosController = require('../controllers/usuarios_controller');

router.get('/', UsuariosController.index);
router.get('/usuarios', UsuariosController.index);
router.get('/usuarios/:id/editar', UsuariosController.editar);
router.post('/usuarios/:id', UsuariosController.atualizar);
router.get('/usuarios/:id/excluir', UsuariosController.excluir);
router.get('/login', LoginController.index);
router.post('/logar', LoginController.logar);
router.get('/sair', LoginController.deslogar);

module.exports = router;

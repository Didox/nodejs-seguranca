const Usuario = require("../models/usuario")
const Cripto = require('../helpers/cripto')

const UsuariosController = {
  index: async (req, res) => {
    const sucesso = await req.consumeFlash('sucesso');
    res.render('usuarios/index', { sucesso: sucesso, usuarios: (await Usuario.todos()) });
  },
  excluir: async (req, res) => {
    await Usuario.excluir(req.params.id);
    await req.flash('sucesso', 'Usuário excluido com sucesso');
    res.redirect("/");
  },
  editar: async (req, res) => {
    res.render('usuarios/editar', { usuario: (await Usuario.find(req.params.id)) });
  },
  atualizar: async (req, res) => {
    let usuario = new Usuario(req.body);
    usuario.id = req.params.id;
    usuario.senha = Cripto.make(usuario.senha)
    await usuario.salvar();
    await req.flash('sucesso', 'Usuário atualizado com sucesso');
    res.redirect("/")
  }
}

module.exports = UsuariosController;
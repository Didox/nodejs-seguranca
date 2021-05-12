const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

const UsuariosController = {
  index: async (req, res) => {
    let usuarioCookie = Cookie.get(req, "usuario");
    if(!usuarioCookie){
      return res.redirect("/login");
    }
    
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
    await usuario.salvar();
    await req.flash('sucesso', 'Usuário atualizado com sucesso');
    res.redirect("/")
  }
}

module.exports = UsuariosController;
const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")
const autenticado = (req) => { return Cookie.get(req, "usuario") }

const UsuariosController = {
  index: async (req, res) => {
    if(!autenticado(req)) return res.redirect("/login");
    
    const sucesso = await req.consumeFlash('sucesso');
    res.render('usuarios/index', { sucesso: sucesso, usuarios: (await Usuario.todos()) });
  },
  excluir: async (req, res) => {
    if(!autenticado(req)) return res.redirect("/login");

    await Usuario.excluir(req.params.id);
    await req.flash('sucesso', 'Usuário excluido com sucesso');
    res.redirect("/");
  },
  editar: async (req, res) => {
    if(!autenticado(req)) return res.redirect("/login");

    res.render('usuarios/editar', { usuario: (await Usuario.find(req.params.id)) });
  },
  atualizar: async (req, res) => {
    if(!autenticado(req)) return res.redirect("/login");
    
    let usuario = new Usuario(req.body);
    usuario.id = req.params.id;
    await usuario.salvar();
    await req.flash('sucesso', 'Usuário atualizado com sucesso');
    res.redirect("/")
  }
}

module.exports = UsuariosController;
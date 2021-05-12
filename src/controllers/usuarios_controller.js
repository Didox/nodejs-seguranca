const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")
const Cripto = require('../helpers/cripto')

const autenticado = (req) => {
  let usuario_validador = Cookie.get(req, "usuario_validador");
  let usuario = Cookie.get(req, "usuario");

  if(!usuario_validador || !usuario) return undefined;
  
  usuario_validador = unescape(usuario_validador);
  usuario = unescape(usuario);
  try{
    usuario = JSON.parse(usuario);
  }
  catch(e){
    return undefined;
  }
  
  let string_usuario = JSON.stringify(usuario);
  let valido = Cripto.compare(string_usuario, usuario_validador);
  if(!valido) return undefined;
  return usuario;
}

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
    usuario.senha = Cripto.make(usuario.senha)
    await usuario.salvar();
    await req.flash('sucesso', 'Usuário atualizado com sucesso');
    res.redirect("/")
  }
}

module.exports = UsuariosController;
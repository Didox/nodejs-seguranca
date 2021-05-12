const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

const LoginController = {
  index: async (req, res) => {
    const erros = await req.consumeFlash('erro');
    res.render('login/index', { erros: erros });
  },
  deslogar: async (req, res) => {
    Cookie.remove(res, "usuario")
    res.redirect("/")
  },
  logar: async (req, res) => {
    let usuario = await Usuario.login(req.query.email, req.query.senha);
    if(usuario){
      Cookie.set(res, "usuario", usuario)
      res.redirect("/usuarios")
    }
    else{
      await req.flash('erro', 'Usuário ou senha inválidos');
      res.redirect("/login")
    }
  }
}

module.exports = LoginController;
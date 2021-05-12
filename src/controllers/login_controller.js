const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

const LoginController = {
  index: async (req, res, next) => {
    const erros = await req.consumeFlash('erro');
    res.render('login/index', { erros: erros });
  },
  deslogar: async (req, res, next) => {
    Cookie.remove(res, "usuario")
    return res.redirect("/")
  },
  logar: async (req, res, next) => {
    let usuario = await Usuario.login(req.query.email, req.query.senha);
    if(usuario){
      Cookie.set(res, "usuario", usuario)
    }
    else{
      await req.flash('erro', 'Usuário ou senha inválidos');
    }

    return res.redirect("/")
  }
}

module.exports = LoginController;
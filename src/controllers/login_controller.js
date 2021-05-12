const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")
const Cripto = require('../helpers/cripto')

const LoginController = {
  index: async (req, res) => {
    const erros = await req.consumeFlash('erro');
    res.render('login/index', { erros: erros, captcha: res.recaptcha });
  },
  deslogar: async (req, res) => {
    Cookie.remove(res, "usuario")
    Cookie.remove(res, "usuario_validador")
    res.redirect("/")
  },
  logar: async (req, res) => {
    if (req.recaptcha.error) {
      await req.flash('erro', 'Captcha inválido');
      res.redirect("/login")
    }
    else{
      let usuario = await Usuario.login(req.body.email, req.body.senha);
      if(usuario){
        let string_usuario = JSON.stringify(usuario);
        Cookie.set(res, "usuario", string_usuario)
        let validador = Cripto.make(string_usuario);
        Cookie.set(res, "usuario_validador", validador)
        res.redirect("/usuarios")
      }
      else{
        await req.flash('erro', 'Usuário ou senha inválidos');
        res.redirect("/login")
      }
    }
  }
}

module.exports = LoginController;
const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

const LoginController = {
  index: async (req, res) => {
    const erros = await req.consumeFlash('erro');
    res.render('login/index', { erros: erros, captcha: res.recaptcha });
  },
  deslogar: async (req, res) => {
    Cookie.remove(res, "usuario")
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
        Cookie.set(res, "usuario", usuario)
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
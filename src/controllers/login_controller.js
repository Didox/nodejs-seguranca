const Usuario = require("../models/usuario")

const LoginController = {
  index: (req, res, next) => {
    res.render('login/index');
  },
  logar: (req, res, next) => {
    if(Usuario.login(res.body.usuario, res.body.senha)){
      return res.redirect("/")
    }
    else{
      return res.redirect("/")
    }
  }
}

module.exports = LoginController;
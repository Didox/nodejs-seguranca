const Usuario = require("../models/usuarios")

const LoginController = {
  index: (req, res, next) => {
    res.render('index', { title: 'Express' });
  },
  logar: (req, res, next) => {
    if(Usuario.login(res.body.usuario, res.body.senha)){
      return res.redirect("/home")
    }
    else{
      return res.redirect("/")
    }
  }
}

module.exports = LoginController;

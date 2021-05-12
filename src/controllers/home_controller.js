const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

const HomeController = {
  index: async (req, res, next) => {
    let usuarioCookie = Cookie.get(req, "usuario");
    if(!usuarioCookie){
      return res.redirect("/login")
    }
    res.render('home/index', { usuarios: (await Usuario.todos()) });
  }
}

module.exports = HomeController;
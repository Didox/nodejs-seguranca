const Cookie = require("../helpers/cookie")
const Cripto = require('../helpers/cripto')

module.exports = (req, res, next) => {
  let usuario_validador = Cookie.get(req, "usuario_validador");
  let usuario = Cookie.get(req, "usuario");

  if(!usuario_validador || !usuario) return res.redirect("/login");
  
  usuario_validador = unescape(usuario_validador);
  usuario = unescape(usuario);
  
  let valido = Cripto.compare(usuario, usuario_validador);
  if(!valido) return res.redirect("/login");

  try{
    usuario = JSON.parse(usuario);
  }
  catch(e){
    return res.redirect("/login");
  }

  req.usuarioLogado = usuario;
  next();
}
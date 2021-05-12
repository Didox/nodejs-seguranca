const Cookie = require("../helpers/cookie")
const Cripto = require('../helpers/cripto')

module.exports = (req, res, next) => {
  let usuario_validador = Cookie.get(req, "usuario_validador");
  let usuario = Cookie.get(req, "usuario");

  if(!usuario_validador || !usuario) res.redirect("/login");
  
  usuario_validador = unescape(usuario_validador);
  usuario = unescape(usuario);
  try{
    usuario = JSON.parse(usuario);
  }
  catch(e){
    res.redirect("/login");
  }
  
  let string_usuario = JSON.stringify(usuario);
  let valido = Cripto.compare(string_usuario, usuario_validador);
  if(!valido) res.redirect("/login");

  next();
}
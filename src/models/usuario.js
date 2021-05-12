const db = require('../config/db')

module.exports = class Cliente{
  constructor(atributos){
    this.nome = atributos.nome
    this.email = atributos.email
    this.senha = atributos.senha
  }

  static login(email, senha, callback){
    let query = "SELECT * FROM usuarios where email = '" + email + "' senha = '" + senha + "' ";
    db.exec(query, function(dados, erro) {
      if(erro){
        console.log("Erro ao executar a query (" + query + ")");
        callback.call(null, []);
      }
      else{
        callback.call(null, dados);
      }
    });
  }

  static async todos(){
    let usuarios = await db.exec("SELECT * FROM usuarios");
    return usuarios;
  }
};
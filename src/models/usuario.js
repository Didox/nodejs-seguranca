const db = require('../config/db')

module.exports = class Cliente{
  constructor(atributos){
    this.nome = atributos.nome
    this.email = atributos.email
    this.senha = atributos.senha
  }

  static async login(email, senha){
    let query = "SELECT * FROM usuarios where email = '" + email + "' and senha = '" + senha + "' ";
    let usuarios = await db.exec(query);
    if(usuarios.length == 0) return undefined
    return usuarios[0];
  }

  static async todos(){
    let usuarios = await db.exec("SELECT * FROM usuarios");
    return usuarios;
  }
};
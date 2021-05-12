const db = require('../config/db')
const Cripto = require('../helpers/cripto')

module.exports = class Cliente{
  constructor(obj){
    this.id = obj.id
    this.nome = obj.nome
    this.email = obj.email
    this.descricao = obj.descricao
    this.senha = obj.senha
  }

  static async buscaPorEmail(email){
    let query = "SELECT * FROM usuarios where email = ?";
    let usuarios = await db.exec(query, [email]);
    if(usuarios.length == 0) return undefined
    return usuarios[0];
  }

  static async todos(){
    let usuarios = await db.exec("SELECT * FROM usuarios");
    return usuarios;
  }

  static async excluir(id){
    await db.exec("delete from usuarios where id = ?", [id]);
  }

  async salvar(){
    let sql = "";
    let values = [];

    this.senha = Cripto.make(this.senha)
    console.log(this.senha)

    if(this.id && this.id > 0){
      sql = "update usuarios set nome=?, email=?, descricao=?, senha=? where id=?";
      values = [this.nome, this.email, this.descricao, this.senha, this.id];
    }
    else{
      sql = "insert into usuarios(nome, email, descricao, senha) values(?,?,?,?)";
      values = [this.nome, this.email, this.descricao, this.senha];
    }
    await db.exec(sql, values);
  }

  static async find(id){
    let usuarios = await db.exec("SELECT * FROM usuarios where id=?", [id]);
    return usuarios[0];
  }
};
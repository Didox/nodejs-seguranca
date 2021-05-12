const db = require('../config/db')

module.exports = class Cliente{
  constructor(obj){
    this.id = obj.id
    this.nome = obj.nome
    this.email = obj.email
    this.descricao = obj.descricao
    this.senha = obj.senha
  }

  static async login(email, senha){
    let query = `SELECT * FROM usuarios where email = '${email}' and senha = '${senha}' `;
    let usuarios = await db.exec(query);
    if(usuarios.length == 0) return undefined
    return usuarios[0];
  }

  static async todos(){
    let usuarios = await db.exec("SELECT * FROM usuarios");
    return usuarios;
  }

  static async excluir(id){
    await db.exec(`delete from usuarios where id = ${id}`);
  }

  async salvar(){
    let sql = "";
    if(this.id && this.id > 0){
      sql = `update usuarios set nome='${this.nome}', email='${this.email}', descricao='${this.descricao}', senha='${this.senha}' where id=${this.id}`;
    }
    else{
      sql = `insert into usuarios(nome, email, descricao, senha) values('${this.nome}', '${this.email}', '${this.descricao}', '${this.senha}')`;
    }
    await db.exec(sql);
  }

  static async find(id){
    let usuarios = await db.exec(`SELECT * FROM usuarios where id= ${id}`);
    return usuarios[0];
  }
};
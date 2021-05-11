module.exports = class Cliente{
  constructor(atributos){
    this.nome = atributos.nome
    this.email = atributos.email
    this.senha = atributos.senha
  }

  static login(email, senha){
    return true;
  }
};
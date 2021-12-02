require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.USUARIO_BANCO,
    "password": process.env.SENHA_BANCO,
    "database": process.env.NOME_BANCO,
    "host": process.env.HOST_BANCO,
    "dialect": "postgres"
  }
}

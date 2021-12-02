<p align="center">
  <a href="https://nodejs.org/">
    <img
      alt="Node.js"
      src="https://nodejs.org/static/images/logo-light.svg"
      width="400"
    />
  </a>
</p>

<p align="center">Facile Challenge</p>

# Descrição

Uma Aplicação Node.js usando express. Um CRUD simples com banco de dados PostgreSQL

Dependências: 
- body-parser (^1.19.0)
- dotenv (^10.0.0)
- ejs (^3.1.6)
- express (^4.17.1)
- express-ejs-layouts (^2.5.1)
- http (*)
- jsonwebtoken (^8.5.1)
- nodemon (^2.0.12)
- path (^0.12.7)
- pg (^8.7.1)
- sequelize (*)
- sequelize-cli (^6.3.0)

# Dificuldades
- Implementação de verificações, não sabia como fazer um tratamento de erros adequado as rotas.
- Uma das primeiras vezes mexendo com o sequelize então demorou mais tempo do que devia para configura-lo.

# Requisitos da Aplicação
- Node.js: https://nodejs.org/en/
- Postgrsql: https://www.postgresql.org/download/

.env: Criar um arquivo ".env" para colocar as configurações do sistema
  - Variaveis:

    ```bash
    USUARIO_BANCO=usuario-banco
    SENHA_BANCO=senha-banco
    HOST_BANCO=host-banco

    CHAVE_JWT=senha-secreta
    ```

Para Criar uma senha jwt digite no terminal:

    node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"

# Comandos para finalizar instalação

Postgresql:

    create database facile;

Bash:

    npm install --save
    npx sequelize-cli db:migrate


# Como rodar a Aplicação

Digite no terminal bash:

    npm start
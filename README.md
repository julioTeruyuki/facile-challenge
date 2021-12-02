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

Bash:

    npm install --save
    npx sequelize-cli db:migrate


# Como rodar a Aplicação

Digite no terminal bash:

    npm start
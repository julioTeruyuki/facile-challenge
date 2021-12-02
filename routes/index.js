const bodyParser = require('body-parser')

// ROTAS
const facile = require("./facileRoute")

module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    facile
  )
}
const http = require("http")
const express = require('express')
const routes = require('./routes')
//const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

//app.set('view engine', 'ejs')
//app.use(expressLayouts)

//app.use(express.static(__dirname + '/public'))

routes(app)

app.use(function(req, res) {
    res.status(401).json({
        code: 401,
        message: "Rota não Encontrada"
    })
})

const server = http.createServer(app)
server.listen(port)
console.log("Servidor rodando na porta 3000")


module.exports = app
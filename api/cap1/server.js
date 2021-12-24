var express = require('express')
var server = express()

server.get('/', function (req, res) {
    const livro1 = {
        nome: "python fluente"
    }
    const livro2 = {
        nome: "js para leigos"
    }
    res.send([livro1, livro2])
})

server.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})
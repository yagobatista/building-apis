const express = require('express')
const server = express()
const bodyParser = require("body-parser");


const storedData = [{
    nome: "python fluente"
}, {
    nome: "js para leigos"
}]

server.get('/', function (req, res) {
    res.send(storedData)
})

server.post('/',bodyParser.json(), function (req, res) {
    storedData.push(req.body)
    res.send(storedData)
})

server.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})
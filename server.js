const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const port = 2500

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`)
})

app.get('/port',(rec,res) => {
    res.send(`servidor corriendo en ${port}`)
})
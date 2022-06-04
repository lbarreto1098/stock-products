const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Petición recibida')
    res.send('Hola Mundo :)')
})

app.listen(4000, () => {
    console.log('Escuchando en el puerto 4000 corectamente')
})
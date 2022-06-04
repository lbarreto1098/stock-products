require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log('Petición recibida')
    res.send('Hola Mundo :)')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})
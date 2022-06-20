require('dotenv').config()
const express = require('express')
//const path = require('path') //para rutas en linux y windows
const cors = require("cors")
const dbConnect = require("./db")
const productRouter = require("./routes/product.routes")
const app = express()
dbConnect(app)

app.use(cors({origin: true}))

app.use(express.json())

app.use('/api/v1/products', productRouter)

//middleware que busca rutas
//intercepta la request GET y redirecciona a los archivos de public
//app.use(express.static(path.join(__dirname, 'public')))




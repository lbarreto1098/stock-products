const express = require('express')
const mongoose = require('mongoose') //librería de MongoDB para interactuar con las colecciones de la DB
const path = require('path') //para rutas en linux y windows
require('dotenv').config()

const app = express()

mongoose.connect(
  `mongodb+srv://lbarreto1098:${process.env.MONGO_DB_PASS}@development.tqihehs.mongodb.net/stock?retryWrites=true&w=majority`
)
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Escuchando en el puerto ${PORT}`)
    })
    console.log('Conexión DB exitosa')
  })
  .catch(e => console.log(e))

//Recibe un esquema del producto
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  precio: Number
},
  { timestamps: true } //Crea fecha de creación y actualización
)

//Modelo para interactuar con la colección
const Product = mongoose.model('Product', productSchema)

app.use(express.json())

app.post('/api/v1/products', (req, res) => {
  //console.log('Petición recibida')
  //console.log({ body: req.body })
  //Instanciar un nuevo documento de tipo producto
  const newProduct = new Product(req.body)
  //Para guardar
  newProduct.save()
  //Si se guarda responer:
    .then(result => {
      res.status(201).json({ ok: true })
    })
    .catch(e => console.log(e))

  //next() //sale del middleware
})

//middleware que busca rutas
//intercepta la request GET y redirecciona a los archivos de public
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 4000


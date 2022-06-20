//Extrae las funciones de las rutas
const Product = require("../models/product")

const getProducts = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({ok: true, data: products.length})
  }

const createProduct = (req, res) => {
    //console.log('Petición recibida')
    //console.log({ body: req.body })
    const name = req.body.nameProduct
    const precio = req.body.precioProduct
    //Instanciar un nuevo documento de tipo producto
    //Si no viene la propiedad name en el bosy muestra el mensaje
    if (!req.body.nameProduct) {
      res.status(400).json({ ok: false, message: "campo nombre obligatorio" })
      return
    }
    //Modelo
    const newProduct = new Product({ name, precio })
    //Para guardar
    newProduct.save()
      //Si se guarda responer:
      .then(result => {
        res.status(201).json({ ok: true })
      })
      .catch(e => console.log(e))
  
    //next() //sale del middleware
  }

module.exports = {
    getProducts,
    createProduct
}

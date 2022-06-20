const mongoose = require("mongoose")

//Recibe un esquema del producto
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    precio: Number
  },
    { timestamps: true } //Crea fecha de creación y actualización
  )
  
  //Modelo para interactuar con la colección
  const Product = mongoose.model('Product', productSchema)

  module.exports = Product
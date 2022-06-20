const mongoose = require('mongoose') //librería de MongoDB para interactuar con las colecciones de la DB

const dbConnect = (app) => {
  mongoose.connect(
    `mongodb+srv://lbarreto1098:${process.env.MONGO_DB_PASS}@development.tqihehs.mongodb.net/stock?retryWrites=true&w=majority`
  )
    .then(result => {
      const PORT = process.env.PORT || 4000
      app.listen(PORT, () => {
        console.log(`Escuchando en el puerto ${PORT}`)
      })
      console.log('Conexión DB exitosa')
    })
    .catch(e => console.log(e))
}

module.exports = dbConnect

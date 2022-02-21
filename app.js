require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')

const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use(express.static('public'));
app.use('/api/1.0', require('./app/routes'))

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port)
});
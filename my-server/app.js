const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const port = process.env.port || 3030
const routers = require('./routes')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:5173'
}
app.use(cors(corsOptions))
app.use('/api', routers)

app.listen(port, function() {
  console.log(`running on the port ${port}`)
})
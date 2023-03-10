require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed, getOrders, createOrder} = require('./controller.js')

app.use(express.json())
app.use(cors())

//app.post('/seed', seed)

// get Orders
app.get('/orders', getOrders)

// create Order
app.post('/orders', createOrder)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))
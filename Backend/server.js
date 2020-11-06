const express = require('express')

const dotenv = require('dotenv')

const cors = require('cors')

const userRouter = require('./Routes/userRouter')
const restaurantRouter = require('./Routes/restaurantRouter')
// const menuRouter = require('./Routes/menuRouter')

dotenv.config()
const app = express()
require('./mongoose')

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

app.use(userRouter)
app.use(restaurantRouter)
// app.use(menuRouter)

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
const express = require('express')

const dotenv = require('dotenv')

const cors = require('cors')

const userRouter = require('./Routes/userRouter')

dotenv.config()
const app = express()
require('./mongoose')

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

app.use(userRouter)


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})
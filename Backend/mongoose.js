const mongoose = require('mongoose')
// const dotenv = require('dotenv')

// dotenv.config()

//Mongoose setup to create connection with DB
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('connection failed')
    }
    else {
        console.log('Connection working')
    }
}
)
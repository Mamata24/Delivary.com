const mongoose = require('mongoose')
const restaurants = require('./restaurants')
const Restaurant = require('./Models/restaurant')
// const menu = require('./menu')
// const Menu = require('./Models/menu')
const { db } = require('./Models/restaurant')
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

// mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
//     if (err) console.log("Connection to the database failed")
//     else {
//         db.collection("restaurants").countDocuments(function (err, count) {
//             if (count === 0) {
//                 Restaurant.insertMany(restaurants)
//                     .then((res) => console.log(res))
//                     .catch((err) => console.log(err))
//             }
//         });
//         console.log("Connected to the database successfully")
//     }
// });

// mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
//     if (err) console.log("Connection to the database failed")
//     else {
//         db.collection("menu").countDocuments(function (err, count) {
//             if (count === 0) {
//                 Menu.insertMany(menu)
//                     .then((res) => console.log(res))
//                     .catch((err) => console.log(err))
//             }
//         });
//         console.log("Connected to the database successfully")
//     }
// });
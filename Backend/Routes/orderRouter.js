const express = require('express')
const router = new express.Router()
const getOrders = require('../Controllers/getOrder')
const addOrders = require('../Controllers/addOrder')

router.get('/order/:id', getOrders.getOrder)
router.post('/getOrders', addOrders.addOrder) //getOrders
module.exports = router

// orders: {
//     dish: {
//         {
//             dish_id: 1,
//             dish_name: 'Crab and scallop parcels',
//             price: ' 18.99',
//             qty: 1,
//             subTotal: '18.99'
//         },
//         {
//             dish_id: 41,
//             dish_name: 'Salmon and horseradish gyoza',
//             price: ' 14.49',
//             qty: 1,
//             subTotal: '14.49'
//         },
//     },
//     user_id,
//     total_amount
//     rest_id,
//         res_name

// }
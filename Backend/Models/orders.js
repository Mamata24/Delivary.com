const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    restaurant_id: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    orders: {
        type: Array,
        required: true,
        trim: true
    },
    latitude: {
        type: Number,
        required: true,
        trim: true,
    },
    longitude: {
        type: Number,
        required: true,
        trim: true,
    },
    total_amount: {
        type: Number,
        required: true,
        trim: true,
    },
},
    {
        versionKey: false,
        timestamps: true
    }
)

const Orders = mongoose.model('Restaurant', orderSchema)
module.exports = Orders
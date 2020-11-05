const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    restaurant_id: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    restaurant_name: {
        type: String,
        required: true,
        trim: true
    },
    restaurant_image: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
    },
    estimated_time: {
        type: Number,
        required: true,
        trim: true,
    },
    min: {
        type: Number,
        required: true,
        trim: true,
    },
    delivery_fee: {
        type: Number,
        required: true,
        trim: true,
    },
    distance: {
        type: Number,
        required: true,
        trim: true,
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
    reviews: {
        type: Number,
        required: true,
        trim: true,
    },
    dollar: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    }
},
    {
        versionKey: false
    }
)

const Restaurant = mongoose.model('Restaurant', restaurantSchema)
module.exports = Restaurant


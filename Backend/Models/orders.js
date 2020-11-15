const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      trim: true,
    },
    restaurant_id: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    restaurant_name: {
      type: String,
      required: true,
      trim: true,
    },
    total_amount: {
      type: String,
      required: true,
      trim: true,
    },
    dish: {
      type: Array,
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Orders = mongoose.model("Order", orderSchema);
module.exports = Orders;

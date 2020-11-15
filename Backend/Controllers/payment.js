const express = require("express");

const Razorpay = require("razorpay");

const dotenv = require("dotenv");

const request = require("request");

const { v4: uuidv4 } = require("uuid");

dotenv.config();

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_SECRET_KEY,
});

const payment = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: uuidv4(),
      payment_capture: 0,
    };
    instance.orders.create(options, (err, order) => {
      if (err)
        return res.status(500).json({ message: "Something went wrong!!" });

      return res.status(200).json(order);
    });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const capturePayment = (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_SECRET_KEY}@api.razorpay.com/1/payments/${req.params.paymentId}`,
        form: {
          amount: 10,
          currency: "INR",
        },
      },
      async function (err, res, body) {
        if (err)
          return res.status(500).json({ message: "Something went wrong!!!" });
        return res.status(200).json(body);
      }
    );
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
};

module.exports = {
  payment,
  capturePayment,
};

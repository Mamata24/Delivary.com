const express = require("express");
const router = new express.Router();

const payment = require("../Controllers/payment");

router.get("/order", payment.payment);

router.post("/capture/:paymentId", payment.capturePayment);

module.exports = router;

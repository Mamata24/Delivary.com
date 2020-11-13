const path = require("path");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
const request = require("request");
// const build = require("build");

const cors = require("cors");

const userRouter = require("./Routes/userRouter");
const restaurantRouter = require("./Routes/restaurantRouter");
const paymentRouter = require("./Routes/paymentRouter");
const orderRouter = require("./Routes/orderRouter");
// const menuRouter = require('./Routes/menuRouter')

dotenv.config();
const app = express();
require("./mongoose");

// app.use(express.static(path.join(__dirname, "Frontend/build")));

// app.use(express.static("Frontend/build"));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
// });

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.use(userRouter);
app.use(restaurantRouter);
app.use(orderRouter);

const instance = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_SECRET_KEY,
});

app.get("/order", (req, res) => {
  try {
    const options = {
      amount: Number(req.query.amount) * 100,
      currency: "INR",
      receipt: uuidv4(),
      payment_capture: 0,
    };
    instance.orders.create(options, (err, order) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.post("/capture/:paymentId", (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZOR_PAY_KEY_ID}:${process.env.RAZOR_PAY_SECRET_KEY}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: Number(req.query.amount) * 100,
          currency: "INR",
        },
      },
      async function (err, response, body) {
        if (err) {
          return res.status(500).json({
            message: "Something Went Wrong1",
          });
        }
        // console.log(body);
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    return res.status(500).json({
      message: "Something Went Wrong2",
    });
  }
});

// app.use(paymentRouter);

// app.use(menuRouter)

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

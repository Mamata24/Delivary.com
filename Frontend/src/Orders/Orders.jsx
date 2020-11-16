import React, { useEffect, useState } from "react";
import styles from "../Checkout/checkout.module.css";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import DashboardNav from "../Dashboard/DashboardNav";
import Footer from "../LandingPage/Footer";
import {
  getAllOrders,
  razorPayment,
  postOrders,
  makePaymentFalse,
} from "../Auth/actions";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: white;
  color: #01579b;
  border: 1px solid white;
  border-radius: 5px;
  &:hover {
    filter: brightness(1.3);
    background: #ff7675;
    color: white;
    border: 1px solid #ff7675;
  }
`;

function Orders() {
  const history = useHistory();
  let { userOrders, user, payment } = useSelector((state) => state.Auth);
  // console.log(userOrders);
  const [click, setClick] = useState(false);
  let displayOrders = userOrders.reverse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(makePaymentFalse());
    setClick(false);
    dispatch(getAllOrders(user._id));
  }, []);

  useEffect(() => {
    dispatch(getAllOrders(user._id));
  }, [payment]);

  const [id, setId] = useState("");

  const paymentHandler = (e, billAmt, id) => {
    e.preventDefault();
    let payload = {
      amount: billAmt,
      name: user.first_name,
    };
    console.log(payload);
    setId(id);
    dispatch(razorPayment(payload));
    setClick(true);
  };

  if (payment && click) {
    let ordersAgain = userOrders.find((order) => order._id === id);
    console.log(ordersAgain);

    let payloadOrders = {
      dish: ordersAgain.dish,
      restaurant_id: ordersAgain.restaurant_id,
      restaurant_name: ordersAgain.restaurant_name,
      user_id: user._id,
      total_amount: ordersAgain.total_amount,
      address: ordersAgain.address,
    };
    console.log("orders", payloadOrders);
    dispatch(postOrders(payloadOrders));
    history.push("/orderSuccess");
    dispatch(makePaymentFalse());
  }

  return (
    <>
      <DashboardNav />
      <div>
        <h3 className={classnames("ml-5 my-4", styles.textColor)}>
          Order History
        </h3>
        <hr />
        <div style={{ height: "100px" }}></div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              {userOrders &&
                displayOrders.map((item) => (
                  <div className="row" key={item._id}>
                    <div className="col">
                      <div className="card border-0 shadow mb-5 ">
                        <div
                          className="card-header text-white"
                          style={{ background: "#01579b" }}
                        >
                          <div className="row">
                            <div className="col">
                              <div className="row">
                                <div className="col h5">Ordered From</div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  {item.restaurant_name}
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row">
                                <div className="col h5">Total</div>
                              </div>
                              <div className="row">
                                <div className="col">₹ {item.total_amount}</div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="row mt-3">
                                <Button
                                  onClick={(e) =>
                                    paymentHandler(
                                      e,
                                      item.total_amount,
                                      item._id
                                    )
                                  }
                                  className="col-8 h5"
                                >
                                  Order Again
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          {item.dish.map((elem) => (
                            <div
                              key={elem.dish_id}
                              className="card mb-3 col-10 offset-1"
                            >
                              <div className="row no-gutters">
                                <div className="col-4 offset-1">
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {elem.dish_name}
                                    </h5>
                                    <p className="card-text">
                                      <div className="row">
                                        <div className="col">
                                          Category:
                                          <span>{elem.category}</span>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          Price: <span>{elem.price}</span>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col">
                                          Quantity:
                                          <span>{elem.qty}</span>
                                        </div>
                                      </div>
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="col-2"
                                  style={{ marginTop: "7%" }}
                                >
                                  Total Price:
                                  <span>{elem.subTotal}</span>
                                </div>
                                <div
                                  className="col-2 offset-1"
                                  style={{ marginTop: "7%" }}
                                >
                                  <button
                                    style={{
                                      background: "#01579b",
                                      color: "white",
                                      border: "1px solid #01579b",
                                    }}
                                  >
                                    Track Order
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
